import express from "express";
import { criarAluno } from "../controller/instrutorContorller.js";


const router = express.Router();

router.post("/instrutor/cadastrarAluno", criarAluno);

export default router;
