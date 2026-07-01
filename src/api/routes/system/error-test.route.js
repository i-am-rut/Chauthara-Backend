import { Router } from "express";

import AppError from "../../../shared/errors/AppError.js";
import ErrorCodes from "../../../shared/errors/errorCodes.js";

const router = Router();

router.get("/error-test", (req, res, next) => {
  next(
    new AppError(
      {statusCode: 404,
      code: ErrorCodes.RESOURCE_NOT_FOUND,
      message: "Test resource not found"}
    )
  );
});

export default router;