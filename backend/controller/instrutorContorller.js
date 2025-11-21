import { criarAlunoService } from "../service/instrutorService.js";

export async function criarAluno(req, res) {
	const dados = req.body;
	const resultado = await criarAlunoService(dados);
	return res.status(200).json(resultado);
}
