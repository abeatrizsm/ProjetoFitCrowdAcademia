import express from "express";
import { buscarTreinos } from "../controller/treinosController.js";

const router = express.Router();

router.get("/treinos/:idAluno/:dia", buscarTreinos);

export default router;
