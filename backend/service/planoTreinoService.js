import { buscarPlano , criarPlanoDAO } from "../dao/planoTreinoDao.js";

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

	if (!dados.id_aluno) return { sucesso: false, mensagem: "Aluno inválido." };

	if (!dados.id_instrutor)
		return { sucesso: false, mensagem: "Instrutor inválido." };

	const id_plano = await criarPlanoDAO(dados);

	return { sucesso: true, id_plano };
}