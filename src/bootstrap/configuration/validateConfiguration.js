import config from "../../shared/configuration/index.js";
import logger from "../../shared/infrastructure/logging/logger.js";

function validateConfiguration() {
  const requiredVariables = [
    {
      name: "MONGO_URI",
      value: config.database.mongoUri,
    },
    {
      name: "JWT_SECRET",
      value: config.auth.jwtSecret,
    },
  ];

  const missingVariables = requiredVariables.filter(
    (variable) => !variable.value,
  );

  if (missingVariables.length > 0) {
    logger.error("✕ Missing required environment variables:\n");

    missingVariables.forEach((variable) => {
      logger.error(`- ${variable.name}`);
    });

    process.exit(1);
  }

  logger.info("✓ Environment Configuration validation passed");
}

export default validateConfiguration;
