import { buscarUsuario } from "../dao/alunosDAO.js";
import { buscarInstrutor } from "../dao/instrutoresDAO.js";

export async function autenticarUsuario(email, senha_d) {
    let usuario = await buscarUsuario(email);
    let tipo = "aluno";

    if (!usuario) {
			usuario = await buscarInstrutor(email);
            tipo = "instrutor"
    }

    if(!usuario){
        return { sucesso: false, mensagem: "Usuario não encontrado"}
    }

    const senha_certa = senha_d === usuario.senha;

    if(!senha_certa){
        return { sucesso: false, mensagem: "Usuario ou senha incorretos."}
    }

    return {sucesso: true, usuario, tipo}
    
}