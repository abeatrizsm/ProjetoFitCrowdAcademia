import { buscarPlano } from "../dao/planoTreinoDao.js";

export async function obterPlano(id) {
	const plano = await buscarPlano(id);

	if (!plano) {
		return { sucesso: false, mensagem: "Nenhum plano encontrado." };
	}

	return { sucesso: true, plano };
}
