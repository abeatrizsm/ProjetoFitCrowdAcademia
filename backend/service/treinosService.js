import { buscarTreinosPorDia } from "../dao/treinosDAO.js";

export async function listarTreinosDoDia(idAluno, diaSemana) {
	const linhas = await buscarTreinosPorDia(idAluno, diaSemana);

	if (linhas.length === 0) {
		return { sucesso: true, treinos: [] };
	}

	const treinosMap = {};

	linhas.forEach((linha) => {
		if (!treinosMap[linha.id_treino]) {
			treinosMap[linha.id_treino] = {
				id_treino: linha.id_treino,
				nome_treino: linha.nome_treino,
				descricao: linha.descricao,
				dia_semana: linha.dia_semana,
				exercicios: [],
			};
		}

		if (linha.id_exercicio) {
			treinosMap[linha.id_treino].exercicios.push({
				id_exercicio: linha.id_exercicio,
				nome: linha.nome_exercicio,
				grupo_muscular: linha.grupo_muscular,
				repeticoes: linha.repeticoes,
				series: linha.series,
				ordem: linha.ordem,
			});
		}
	});

	return { sucesso: true, treinos: Object.values(treinosMap) };
}
