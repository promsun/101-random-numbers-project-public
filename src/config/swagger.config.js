const swaggerJsdoc = require("swagger-jsdoc");
const config = require("./app.config");

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
        url: `http://localhost:${config.port}`,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
