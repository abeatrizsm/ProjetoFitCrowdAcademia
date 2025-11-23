import api from "./api";

export async function buscarTreinosDia(idAluno, diaSemana) {
	try {
		const resposta = await api.get(`/treinos/${idAluno}/${diaSemana}`);
		return resposta.data;
	} catch (e) {
		return { sucesso: false, treinos: [] };
	}
}
export async function buscarExercicios() {
	try {
		const resp = await api.get("/instrutor/exercicios");
		return resp.data;
	} catch (e) {
		return { sucesso: false, exercicios: [] };
	}
}

export async function criarTreino(dados) {
	try {
		const resp = await api.post("/instrutor/treino", dados);
		return resp.data;
	} catch (e) {
		return { sucesso: false, mensagem: "Erro ao criar treino." };
	}
}

export async function adicionarExerciciosNoTreino(id_treino, exercicios) {
	try {
		const resp = await api.post(`/instrutor/treino/${id_treino}/exercicios`, {
			exercicios,
		});
		return resp.data;
	} catch (e) {
		return { sucesso: false, mensagem: "Erro ao adicionar exercícios." };
	}
}