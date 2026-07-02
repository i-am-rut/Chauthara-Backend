import validateConfiguration from "../configuration/validateConfiguration.js";
import { connectDatabase } from "../database/index.js";
import { createApp } from "../express/index.js";

import appConfig from "../../shared/configuration/app.config.js";
import logger from "../../shared/infrastructure/logging/logger.js";

async function startServer() {
  try {
    validateConfiguration();

    await connectDatabase();

    const app = createApp();

    app.listen(appConfig.port, () => {
      logger.info(`Server running on port ${appConfig.port}`);
    });
  } catch (error) {
    logger.error("Application startup failed");
    logger.error(error);

    process.exit(1);
  }
}

export default startServer;
