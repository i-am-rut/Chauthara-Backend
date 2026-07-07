import validateConfiguration from "../configuration/validateConfiguration.js";
import { connectDatabase } from "../database/index.js";
import { createApp } from "../express/index.js";

import config from "../../shared/configuration/index.js"
import logger from "../../shared/infrastructure/logging/logger.js";

import ErrorCodes from "../../shared/errors/errorCodes.js";

async function startServer() {
  try {
    validateConfiguration();

    await connectDatabase();

    const app = createApp();

    app.listen(config.app.port, () => {
      logger.info(`Server running on port ${config.app.port}`);
    });
  } catch (err) {
    logger.error({ code: ErrorCodes.STARTUP_FAILED, message: "Application startup failed", errorMessage: err.message, });
    console.log(err) // Node environment - Development only

    process.exit(1);
  }
}

export default startServer;
