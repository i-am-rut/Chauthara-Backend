import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import requestId from "../../shared/middleware/requestID.middleware.js";
import requestLogger from "../../shared/middleware/requestLogger.middleware.js";

function registerMiddleware(app) {
  app.use(express.json());

  app.use(cookieParser());

  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );

  app.use(requestId);

  app.use(requestLogger);

}

export default registerMiddleware;
