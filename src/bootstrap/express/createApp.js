import express from "express";
import registerMiddleware from "./registerMiddleware.js";
import registerRoute from "./registerRoutes.js";

function createApp() {
  const app = express();

  registerMiddleware(app);

  registerRoute(app);

  registerMiddleware(app);

  return app;
}

export default createApp;