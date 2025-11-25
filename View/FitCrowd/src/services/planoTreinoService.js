import api from "./api";

export async function obterPlanoTreino(id) {
    try{
        const resposta = await api.get(`/plano/${id}`);
        return resposta.data;
    } catch (e) {
        return { sucesso: false };
    }
    
}
export async function criarPlano(dados) {
	try {
		const resp = await api.post("/instrutor/criarPlano", dados);
		return resp.data;
	} catch (e) {
		return { sucesso: false, mensagem: "Erro ao criar plano." };
	}
}

export async function apagarPlano(id_plano) {
	try {
		const resp = await api.delete(`/plano/${id_plano}`);
		return resp.data;
	} catch (erro) {
		return (
			erro.response?.data || {
				sucesso: false,
				mensagem: "Erro ao apagar plano.",
			}
		);
	}
}