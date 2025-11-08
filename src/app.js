const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger.config");
const randomRoutes = require("./routes/random.routes");
const config = require("./config/app.config");

// CDN CSS for Swagger UI
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: config.app.name,
      version: config.app.version,
      description: config.app.description,
      status: "running",
      timestamp: new Date().toISOString(),
      documentation: "/api-docs",
    },
  });
});

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL })
);

// API Routes
app.use("/api", randomRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: {
      message: "Endpoint not found",
      path: req.path,
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.status || err.statusCode || 500;

  // Structured error response
  const response = {
    success: false,
    error: {
      message: err.message || "Internal Server Error",
    },
  };

  // Show stack trace only in development
  if (process.env.NODE_ENV === "development") {
    response.error.stack = err.stack;
  }

  res.status(statusCode).json(response);
});

module.exports = app;
