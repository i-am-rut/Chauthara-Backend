import { Router } from "express"

import systemRouter from "../../api/routes/index.js"
import identityRouter from "../../modules/identity/api/routes/identity.tree.router.js"


const router = Router();

router.use(systemRouter);
router.use(identityRouter);

export default router;