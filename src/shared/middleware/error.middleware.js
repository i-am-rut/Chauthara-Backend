import AppError from "../errors/AppError.js";
import ErrorCodes from "../errors/errorCodes.js";

function errorMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      code: ErrorCodes.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
    },
  });
}

export default errorMiddleware;
