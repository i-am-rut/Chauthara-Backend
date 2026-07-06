import { Router } from "express";
import identitySubRouter from "./index.js"

const router = Router();

router.use("/identity", identitySubRouter);

export default router;