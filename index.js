require("dotenv").config();
const app = require("./src/app");
const config = require("./src/config/app.config");

app.listen(config.port, () => {
  console.log(`✅ Server is running on port ${config.port}`);
  console.log(`✅ Environment: ${config.nodeEnv}`);
  console.log(`✅ API Documentation: http://localhost:${config.port}/api-docs`);
});
