import logger from "../infrastructure/logging/logger.js";

export default function requestLogger(req, res, next) {
  logger.http({
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    requestId: req.requestId,
  });

  next();
}