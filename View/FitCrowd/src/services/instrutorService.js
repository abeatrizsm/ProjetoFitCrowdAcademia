import api from "./api";

export async function criarAluno(dados) {
	try {
		const resposta = await api.post("/instrutor/cadastrarAluno", dados);
		return resposta.data;
	} catch (erro) {
		return { sucesso: false, mensagem: "Erro ao cadastrar aluno." };
	}
}
export async function buscarAlunos() {
    try {
        const resp = await api.get("/instrutor/alunos");
        return resp.data;
    } catch (e) {
        return { sucesso: false, alunos: [] };
    }
}