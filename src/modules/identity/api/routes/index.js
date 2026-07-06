import { Router } from "express";
import registerRouter from "./register.route.js"

const router = Router();

router.use(registerRouter);

export default router;