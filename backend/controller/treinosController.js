import { adicionarExerciciosService, criarTreinoService, listarTreinosDoDia } from "../service/treinosService.js";

export async function criarTreino(req, res) {
	const resultado = await criarTreinoService(req.body);
	return res.status(200).json(resultado);
}

export async function adicionarExercicios(req, res) {
	const { id_treino } = req.params;
	const { exercicios } = req.body;

	const resultado = await adicionarExerciciosService(id_treino, exercicios);
	return res.status(200).json(resultado);
}
export async function buscarTreinos(req, res) {
	const { idAluno, dia } = req.params;

	try {
		const resultado = await listarTreinosDoDia(idAluno, dia);
		return res.status(200).json(resultado);
	} catch (erro) {
		console.error(erro);
		return res.status(500).json({
			sucesso: false,
			mensagem: "Erro ao buscar treinos.",
		});
	}
}
