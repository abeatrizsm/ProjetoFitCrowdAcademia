import express from "express";
import { adicionarExercicios, buscarTreinos, criarTreino } from "../controller/treinosController.js";

const router = express.Router();

router.get("/treinos/:idAluno/:dia", buscarTreinos);
router.post("/instrutor/treino", criarTreino);
router.post("/instrutor/treino/:id_treino/exercicios", adicionarExercicios);

export default router;
