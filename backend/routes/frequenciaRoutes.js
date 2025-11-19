import express from "express";
import { registrarFrequencia } from "../controller/frequenciaController.js";

const router = express.Router();

router.post("/frequencia/registrar/:id", registrarFrequencia);

export default router;
