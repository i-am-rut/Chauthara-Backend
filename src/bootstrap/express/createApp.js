import express from "express";
import registerMiddleware from "./registerMiddleware.js";
import registerRoute from "./registerRoutes.js";
import registerErrorMiddleware from "./registerErrorMiddleware.js";
import requestLogger from "../../shared/middleware/requestLogger.middleware.js";

function createApp() {
  const app = express();

  registerMiddleware(app);

  app.use(requestLogger);

  registerRoute(app);

  registerErrorMiddleware(app);

  return app;
}

export default createApp;
