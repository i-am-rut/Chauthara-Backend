import express from "express";
import "dotenv/config";

import validateConfiguration from "./bootstrap/configuration/validateConfiguration.js";
import { connectDatabase } from "./bootstrap/database/index.js";

import appConfig from "./shared/configuration/app.config.js";

async function startServer() {
  validateConfiguration();

  await connectDatabase();

  const app = express();

  app.listen(appConfig.port, () => {
    console.log(`Server running on port ${appConfig.port}`);
  });
}

startServer();