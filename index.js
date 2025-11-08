require("dotenv").config();
const app = require("./src/app");
const config = require("./src/config/app.config");

app.listen(config.port, () => {
  console.log(`✅ Server is running at: ${config.serverUrl}`);
  console.log(`✅ Environment: ${config.nodeEnv}`);
  console.log(`✅ API Documentation: ${config.serverUrl}/api-docs`);
});
