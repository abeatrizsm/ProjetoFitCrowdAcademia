import { listarTreinosDoDia } from "../service/treinosService.js";

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
