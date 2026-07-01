import AppError from "../errors/AppError.js";
import ErrorCodes from "../errors/errorCodes.js";

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues
        .map(issue => issue.message)
        .join(", ");

      return next(
        new AppError({
          statusCode: 400,
          code: ErrorCodes.VALIDATION_ERROR,
          message,
        })
      );
    }

    req.validatedBody = result.data;

    next();
  };
}

export default validate;