import { Router } from "express";

import healthRouter from "./system/health.route.js";
import versionRouter from "./system/version.route.js";
import errorTestRouter from "./system/error-test.route.js";

const router = Router();

router.use(healthRouter);
router.use(versionRouter);
router.use(errorTestRouter);

export default router;
