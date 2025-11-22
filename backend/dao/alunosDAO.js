import db from "../config/db.js";


export async function buscarUsuario(email) {
    const [rows] = await db.query("select * from alunos where email = ?", [email]);
    return rows[0];
}
export async function buscarAlunoCpf(cpf) {
    const [rows] = await db.query("select * from alunos where cpf = ?", [cpf])
    return rows[0]
}
export async function alterarUsuario(nome, email, cpf, telefone, id) {
    const [rows] = await db.query("update alunos set nome = ?, email = ?, cpf = ?, telefone = ? where id_aluno = ?", [nome,email,cpf,telefone,id]);
    return rows;   
}

export async function alterarSenha(senha_nova, id) {
    await db.query("update alunos set senha = ? where id_aluno = ?", [senha_nova, id])
}

export async function buscarFrequencia(id) {
    const [rows] = await db.query("select id_frequencia, data_aula, presenca from frequencia where id_aluno = ? order by data_aula desc", id)
    return rows;
}
export async function criarAlunoDAO({ nome, email, senha, telefone, cpf }) {
	const [rows] = await db.query("insert into alunos (nome, email, senha, telefone, cpf, data_ingresso, dias_ativos, treinos_concluidos) values (?, ?, ?, ?, ?, CURDATE(), 0, 0)", [nome, email, senha, telefone,cpf]);
	return rows.insertId;
}

export async function listarTodosAlunosDAO() {
	const [rows] = await db.query("select id_aluno, nome, email, data_ingresso, treinos_concluidos from alunos order by nome asc");
	return rows;
}

