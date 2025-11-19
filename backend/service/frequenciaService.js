import { salvarFrequencia, verificarCheckInDoDia } from "../dao/frequenciaDAO.js";

export async function validarFrequencia(id, presenca, data) {
	if (!data || !presenca) {
		return {
			sucesso: false,
			mensagem: "Dados incompletos.",
		};
	}
	const jaRegistrado = await verificarCheckInDoDia(id);

	if (jaRegistrado.length > 0) {
		return {
			sucesso: false,
			mensagem: "Você já registrou check-in hoje.",
		};
	}

	await salvarFrequencia(id, presenca, data);
	return { sucesso: true, mensagem: "frequencia registrada" };
}
