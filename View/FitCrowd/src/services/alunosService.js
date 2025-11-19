import api from "./api";

export async function alterarDadosUsuario(id, dados) {
	try {
		const resposta = await api.put(`/alunos/${id}`, dados);
		return resposta.data;
	} catch (erro) {
		if (erro.response && erro.response.data) {
			return erro.response.data;
		}
		return { sucesso: false, mensagem: "Erro inesperado" };
	}
}

export async function alterarSenhaUsuario(id, dados) {
	try {
		const resposta = await api.put(`/alunos/alterarSenha/${id}`, dados);
		return resposta.data;
	} catch (erro) {
		if (erro.response && erro.response.data) {
			return erro.response.data;
		}
		return { sucesso: false, mensagem: "Erro inesperado" };
	}
}

export async function buscarHistorico(id) {
	try {
		const resposta = await api.get(`/alunos/historico/${id}`);
		return resposta.data;
	} catch (erro) {
		return { sucesso: false, historico: [] };
	}
}
