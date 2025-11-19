import express from "express";
import {autenticarLogin} from "../controller/authController.js"
import { alterarDados, mudarSenha, obterHistorico } from "../controller/alunosControler.js";

const router = express.Router();

router.post("/login", autenticarLogin);

router.get("/teste", (req, res) => {
	res.send("Rotas funcionando ");
});

router.put("/alunos/:id", alterarDados)
router.put("/alunos/alterarSenha/:id", mudarSenha)
router.get("/alunos/historico/:id", obterHistorico)
export default router;
