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

