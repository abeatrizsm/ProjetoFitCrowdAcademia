import express from "express";
import { criarAluno, listarAlunos } from "../controller/instrutorContorller.js";


const router = express.Router();

router.post("/instrutor/cadastrarAluno", criarAluno);
router.get("/instrutor/alunos", listarAlunos);

export default router;
