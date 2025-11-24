import {buscarUsuario,buscarAlunoCpf,criarAlunoDAO, listarTodosAlunosDAO,} from "../dao/alunosDAO.js";


export async function listarAlunosService() {
	try {
		const alunos = await listarTodosAlunosDAO();
		return { sucesso: true, alunos };
	} catch (erro) {
		return { sucesso: false, mensagem: "Erro ao listar alunos." };
	}
}

export async function criarAlunoService({ nome, email, senha, telefone, cpf }) {

	if (!nome || nome.trim() === "") {
		return { sucesso: false, mensagem: "Nome não pode ser vazio." };
	}

	if (!email || email.trim() === "") {
		return { sucesso: false, mensagem: "Email não pode ser vazio." };
	}

	if (!senha || senha.trim() === "") {
		return { sucesso: false, mensagem: "Senha não pode ser vazia." };
	}

	if (!cpf || cpf.trim() === "") {
		return { sucesso: false, mensagem: "CPF não pode ser vazio." };
	}

	if (!telefone || telefone.trim() === "") {
		return { sucesso: false, mensagem: "Telefone não pode ser vazio." };
	}

	if (!/^\d{11}$/.test(cpf)) {
		return {
			sucesso: false,
			mensagem: "CPF deve conter exatamente 11 números.",
		};
	}

	if (!/^\d{11}$/.test(telefone)) {
		return {
			sucesso: false,
			mensagem: "Telefone deve conter 11 números.",
		};
	}

	if (!email.includes("@") || !email.includes(".")) {
		return { sucesso: false, mensagem: "Email inválido." };
	}

	if (senha.length < 4) {
		return {
			sucesso: false,
			mensagem: "Senha deve ter pelo menos 4 caracteres.",
		};
	}

	const emailExistente = await buscarUsuario(email);
	if (emailExistente) {
		return { sucesso: false, mensagem: "Email já cadastrado." };
	}

	const cpfExistente = await buscarAlunoCpf(cpf);
	if (cpfExistente) {
		return { sucesso: false, mensagem: "CPF já cadastrado." };
	}

	await criarAlunoDAO({ nome, email, senha, telefone, cpf });

	return { sucesso: true, mensagem: "Aluno cadastrado com sucesso!" };
}
