import { apagarPlanoDAO, buscarPlano , criarPlanoDAO } from "../dao/planoTreinoDao.js";

export async function obterPlano(id) {
	const plano = await buscarPlano(id);

	if (!plano) {
		return { sucesso: false, mensagem: "Nenhum plano encontrado." };
	}

	return { sucesso: true, plano };
}
export async function criarPlanoService(dados) {
	if (!dados.nome_plano || dados.nome_plano.trim() === "")
		return { sucesso: false, mensagem: "Nome do plano é obrigatório." };

	if (!/^[A-Za-zÀ-ÿ\s]+$/.test(dados.nome_plano))
		return {
			sucesso: false,
			mensagem: "O nome do plano deve conter apenas letras.",
		};

	if (!dados.objetivo || dados.objetivo.trim() === "")
		return { sucesso: false, mensagem: "Objetivo é obrigatório." };

	if (!/^[A-Za-zÀ-ÿ\s]+$/.test(dados.objetivo))
		return {
			sucesso: false,
			mensagem: "O objetivo deve conter apenas letras.",
		};

	if (!dados.duracao_semanas)
		return { sucesso: false, mensagem: "Duração inválida." };

	if (!dados.frequencia_semanal)
		return { sucesso: false, mensagem: "Frequência semanal inválida." };

	if (!dados.nivel)
		return { sucesso: false, mensagem: "Nível é obrigatório." };

	if (!dados.id_aluno) return { sucesso: false, mensagem: "Aluno inválido." };

	if (!dados.id_instrutor)
		return { sucesso: false, mensagem: "Instrutor inválido." };

	const id_plano = await criarPlanoDAO(dados);
	return { sucesso: true, id_plano };
}

export async function apagarPlanoService(id_plano) {
	if (!id_plano) return { sucesso: false, mensagem: "Plano inválido." };

	await apagarPlanoDAO(id_plano);
	return { sucesso: true, mensagem: "Plano apagado com sucesso." };
}