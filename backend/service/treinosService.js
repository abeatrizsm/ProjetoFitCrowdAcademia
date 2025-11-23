import { adicionarExercicioDAO, buscarTreinosPorDia, criarTreinoDAO } from "../dao/treinosDAO.js";

export async function criarTreinoService(dados) {
	if (!dados.nome_treino)
		return { sucesso: false, mensagem: "Nome do treino obrigatório." };

	if (!dados.id_plano) return { sucesso: false, mensagem: "Plano inválido." };

	const id_treino = await criarTreinoDAO(dados);
	return { sucesso: true, id_treino };
}

export async function adicionarExerciciosService(id_treino, exercicios) {
	for (let i = 0; i < exercicios.length; i++) {
		const ex = exercicios[i];
		await adicionarExercicioDAO(id_treino, ex.id_exercicio, i + 1);
	}
	return { sucesso: true };
}

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
