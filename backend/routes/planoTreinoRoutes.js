import express from "express";
import { procurarPlano } from "../controller/planoTreinoController.js";

const router = express.Router();

router.get("/plano/:id", procurarPlano);

export default router;
