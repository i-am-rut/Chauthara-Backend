import validateConfiguration from "../configuration/validateConfiguration.js";
import { connectDatabase } from "../database/index.js";
import { createApp } from "../express/index.js";

import appConfig from "../../shared/configuration/app.config.js";

async function startServer() {
  try {
    validateConfiguration();

    await connectDatabase();

    const app = createApp();

    app.listen(appConfig.port, () => {
      console.log(`Server running on port ${appConfig.port}`);
    });
  } catch (error) {
    console.error("Application startup failed");
    console.error(error);

    process.exit(1);
  }
}

export default startServer;