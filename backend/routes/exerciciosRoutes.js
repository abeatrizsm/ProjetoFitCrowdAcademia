import express from "express";
import { cadastrarExercicio, excluirExercicio, listarExercicios } from "../controller/exerciciosController.js";

const router = express.Router();

router.get("/instrutor/exercicios", listarExercicios);
router.post("/instrutor/cadastrarExercicios", cadastrarExercicio);
router.delete("/instrutor/exercicios/:id_exercicio", excluirExercicio);

export default router;
