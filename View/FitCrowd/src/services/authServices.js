import api from "./api";

export async function loginUsuario(email,senha) {
    try{
        const resposta = await api.post("/login", {email, senha});
        return resposta.data;
    } catch (erro) {
		if (erro.response) {
			return erro.response.data;
		}
		return { mensagem: "Erro de conexão com o servidor. login Usuario" };
	} 
} 

// catch (erro) {
//     if(erro.response){
//         alert();
//     }
// }