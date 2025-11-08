const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  serverUrl:
    process.env.SERVER_URL || `http://localhost:${process.env.PORT || 3000}`,

  app: {
    name: "Random Numbers API",
    version: "1.0.0",
    description:
      "A backend application that generates random numbers, simulates coin flips, and dice rolls",
  },
};

module.exports = config;
