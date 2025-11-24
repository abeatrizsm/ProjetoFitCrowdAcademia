import api from "./api";

export async function cadastrarNovoExercicio(dados) {
    try{
        const resposta = await api.post(`/instrutor/cadastrarExercicios`, {
					nome: dados.nome,
					grupo_muscular: dados.grupoMuscular,
					repeticoes: dados.repeticao,
					series: dados.series,
				});
        return resposta.data;
    } catch (erro) {
		return (
			erro.response.data || { sucesso: false, mensagem: "Erro inesperado" }
		);
	}
}
export async function registrarCheckIn(id, dados) {
	try {
		const resposta = await api.post(`/frequencia/registrar/${id}`, dados);
		return resposta.data;
	} catch (erro) {
		return (
			erro.response.data || { sucesso: false, mensagem: "Erro inesperado" }
		);
	}
}