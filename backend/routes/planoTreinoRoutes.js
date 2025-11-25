import express from "express";
import { apagarPlano, criarPlano, procurarPlano } from "../controller/planoTreinoController.js";

const router = express.Router();

router.get("/plano/:id", procurarPlano);
router.post("/instrutor/criarPlano", criarPlano);
router.delete("/plano/:id_plano", apagarPlano);


export default router;
