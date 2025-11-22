import { criarAlunoService, listarAlunosService } from "../service/instrutorService.js";

export async function criarAluno(req, res) {
	const dados = req.body;
	const resultado = await criarAlunoService(dados);
	return res.status(200).json(resultado);
}

export async function listarAlunos(req, res) {
	const resultado = await listarAlunosService();
	return res.status(200).json(resultado);
}
