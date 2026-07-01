import { Router } from "express";
import packageConfig from "../../../shared/configuration/package.config.js";

const router = Router();

router.get("/version", (req, res) => {
  res.status(200).json({
    version: packageConfig.version,
  });
});

export default router;