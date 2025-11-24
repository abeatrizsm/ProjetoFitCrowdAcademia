import express from "express";
import { cadastrarExercicio, listarExercicios } from "../controller/exerciciosController.js";

const router = express.Router();

router.get("/instrutor/exercicios", listarExercicios);
router.post("/instrutor/cadastrarExercicios", cadastrarExercicio);

export default router;
