import { verifyAccessToken, } from "../infrastructure/auth/token.service.js";

import AppError from "../errors/AppError.js";
import ErrorCodes from "../errors/errorCodes.js";

export const authenticate = ( req, res, next ) => {
  try {
    const token =
      req.cookies?.accessToken;
    console.log(token)
    if (!token) {
      throw new AppError({
        statusCode: 401,
        code: ErrorCodes.AUTHENTICATION_REQUIRED,
        message: "Authentication Required"
      });
    }

    const payload =
      verifyAccessToken(token);

    req.user = payload;

    next();
  } catch(err) {
    next(
      new AppError({
        code: ErrorCodes.AUTHENTICATION_REQUIRED,
        statusCode: 401,
        message: "Authentication Required",
      }),
    );
  }
};