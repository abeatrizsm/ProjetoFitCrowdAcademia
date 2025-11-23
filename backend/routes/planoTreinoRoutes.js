import express from "express";
import { criarPlano, procurarPlano } from "../controller/planoTreinoController.js";

const router = express.Router();

router.get("/plano/:id", procurarPlano);
router.post("/instrutor/criarPlano", criarPlano);


export default router;
