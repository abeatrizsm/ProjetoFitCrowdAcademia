import api from "./api";

export async function registrarCheckIn(id, dados) {
    try{
        const resposta = await api.post(`/frequencia/registrar/${id}`, dados)
        return resposta.data;
    } 
    catch (erro) {
		return erro.response.data || { sucesso: false, mensagem: "Erro inesperado" };
	}
}