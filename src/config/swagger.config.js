const swaggerJsdoc = require("swagger-jsdoc");
const config = require("./app.config");

const isProduction = config.nodeEnv === "production";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: config.app.name,
      version: config.app.version,
      description: config.app.description,
    },
    servers: [
      {
        url: config.serverUrl,
        description: isProduction ? "Production server" : "Development server",
      },
    ],
    tags: [
      {
        name: "Random Operations",
        description: "Endpoints for generating random values",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
