import config from "../../shared/configuration/index.js";
import ErrorCodes from "../../shared/errors/errorCodes.js";
import logger from "../../shared/infrastructure/logging/logger.js";

function validateConfiguration() {
  const requiredVariables = [
    {
      name: "MONGO_URI",
      value: config.database.mongoUri,
    },
    {
      name: "ACCESS_TOKEN_JWT_SECRET",
      value: config.auth.AccessTokenJwtSecret,
    },
    {
      name: "ACCESS_TOKEN_JWT_EXPIRES_IN",
      value: config.auth.AccessTokenJwtExpiresIn,
    },
    {
      name: "REFRESH_TOKEN_JWT_SECRET",
      value: config.auth.RefreshTokenJwtSecret,
    },
    {
      name: "REFRESH_TOKEN_JWT_EXPIRES_IN",
      value: config.auth.RefreshTokenJwtExpiresIn,
    },
  ];

  const missingVariables = requiredVariables.filter(
    (variable) => !variable.value,
  );

  if (missingVariables.length > 0) {
    const code = ErrorCodes.CONFIGURATION_ERROR;
    const message = "Missing required environment variables";
    let str = 'Missing - '
    for (let i = 0; i < missingVariables.length; i++) {
      str = str + missingVariables[i].name + ", "
    }
    const details = str;

    logger.error({ code, message, details })

    process.exit(1);
  }

  logger.info("✓ Environment Configuration validation passed");
}

export default validateConfiguration;
