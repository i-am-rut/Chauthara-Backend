import AppError from "../errors/AppError.js";
import ErrorCodes from "../errors/errorCodes.js";

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    const details = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (!details[field]) {
          details[field] = [];
        }

        details[field].push(issue.message);
      };

      return next(
        new AppError({
          statusCode: 400,
          code: ErrorCodes.VALIDATION_ERROR,
          message: "Validation Failed.",
          details,
        })
      );
    }

    req.validatedBody = result.data;

    next();
  };
}

export default validate;