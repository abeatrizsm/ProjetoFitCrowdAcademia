import api from "./api";

export async function obterPlanoTreino(id) {
    try{
        const resposta = await api.get(`/plano/${id}`);
        return resposta.data;
    } catch (e) {
        return { sucesso: false };
    }
    
}