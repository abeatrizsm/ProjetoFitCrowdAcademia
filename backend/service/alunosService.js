import { buscarUsuario, buscarAlunoCpf, alterarUsuario, alterarSenha, buscarFrequencia } from "../dao/alunosDAO.js";


export async function verificarAlteracao(nome, cpf, telefone, email, id) {
	if (!nome || nome.trim() === "") {
		return { sucesso: false, mensagem: "Nome não pode ser vazio." };
	}

	if (!email || email.trim() === "") {
		return { sucesso: false, mensagem: "Email não pode ser vazio." };
	}

	if (!cpf || cpf.trim() === "") {
		return { sucesso: false, mensagem: "CPF não pode ser vazio." };
	}

	if (!telefone || telefone.trim() === "") {
		return { sucesso: false, mensagem: "Telefone não pode ser vazio." };
	}

	if (!/^\d{11}$/.test(cpf)) {
		return { sucesso: false, mensagem: "CPF deve conter 11 números." };
	}

	if (!/^\d{10,11}$/.test(telefone)) {
		return { sucesso: false, mensagem: "Telefone deve conter apenas números." };
	}

	if (!email.includes("@") || !email.includes(".")) {
		return { sucesso: false, mensagem: "Email inválido." };
	}
	let emailValido = await buscarUsuario(email);
	let cpfValido = await buscarAlunoCpf(cpf);

	if (emailValido && emailValido.id_aluno != id) {
		return { sucesso: false, mensagem: "Esse email já foi cadastrado" };
	}
	if (cpfValido && cpfValido.id_aluno != id) {
		return { sucesso: false, mensagem: "Esse email já foi cadastrado" };
	}

	await alterarUsuario(nome, email, cpf, telefone, id);
	return { sucesso: true, mensagem: "Usuário alterado!" };
}

export async function validarSenha(senha_nova, senha_confirmar, id) {
	if (senha_nova != senha_confirmar) {
		return { sucesso: false, mensagem: "As senhas não são iguais"}
	}

	await alterarSenha(senha_nova,id)
	return {sucesso: true, mensagem: "Senha alterada!"}
}

export async function listarPresenca(id) {
	const frequencias = await buscarFrequencia(id);

	if (!frequencias || frequencias.length == 0) {
		return{ sucesso: true, historico: []}
		
	}

	return {sucesso: true , historico: frequencias}
	
}