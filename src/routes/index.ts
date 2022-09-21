import { Router } from "express";
import { standsRouter } from "./forest";

const router = Router();

router.use("/stands", standsRouter);

export default router;
