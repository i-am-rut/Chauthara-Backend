import express from "express";
import registerMiddleware from "./registerMiddleware.js";
import registerRoute from "./registerRoutes.js";
import registerErrorMiddleware from "./registerErrorMiddleware.js";

function createApp() {
  const app = express();

  registerMiddleware(app);

  registerRoute(app);

  registerErrorMiddleware(app);

  return app;
}

export default createApp;
