import { Router } from "express";
import validate from "../../../../shared/middleware/validation.middleware.js";
import { registerSchema } from "../schemas/index.js";
import registerController from "../controllers/register.controller.js";

const router = Router();

router.post("/register", validate(registerSchema), registerController)

export default router
