import ErrorCodes from "../errors/errorCodes.js";

import AppError from "../errors/AppError.js";
import InfrastructureError from "../errors/InfrastructureError.js";

import logger from "../infrastructure/logging/logger.js";
import InfrastructureErrorResponses from "../errors/infrastructure/infrastructureErrorResponses.js";
import { createErrorLogs, createInfrastructureErrorLogs, createUnexpectedErrorLogs } from "../errors/helpers/index.js";

function errorMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {

    logger.warn(createErrorLogs(err, req))

    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
      requestId: req.requestId,
    });
  }

  if (err instanceof InfrastructureError) {

    logger.error(createInfrastructureErrorLogs(err, req))

    const response = InfrastructureErrorResponses[err.code]

    if (response) {
      return res.status(response.statusCode).json({
        error: {
          code: response.code,
          message: response.message,
          details: null
        },
        requestId: req.requestId,
      })
    }

    return res.status(500).json({
      error: {
        code: ErrorCodes.INTERNAL_SERVICE_FAILED,
        message: "Unable to process your request.",
        details: null
      },
      requestId: req.requestId
    })
  }

  logger.error(createUnexpectedErrorLogs(err, req));

  return res.status(500).json({
    error: {
      code: ErrorCodes.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
    },
    requestId: req.requestId,
  });
}

export default errorMiddleware;
