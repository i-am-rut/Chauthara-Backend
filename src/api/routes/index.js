import { Router } from "express";

import healthRouter from "./system/health.route.js";
import versionRouter from "./system/version.route.js";

const router = Router();

router.use(healthRouter);
router.use(versionRouter);

export default router;
