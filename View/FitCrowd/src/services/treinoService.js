import api from "./api";

export async function buscarTreinosDia(idAluno, diaSemana) {
	try {
		const resposta = await api.get(`/treinos/${idAluno}/${diaSemana}`);
		return resposta.data;
	} catch (e) {
		return { sucesso: false, treinos: [] };
	}
}
