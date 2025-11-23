import db from "../config/db.js";

export async function buscarPlano(id) {
    const [rows] = await db.query("select pt.id_plano, pt.nome_plano, pt.objetivo, pt.duracao_semanas, pt.nivel, pt.frequencia_semanal, i.nome from plano_treino pt join instrutores i on i.id_instrutor = pt.id_instrutor where id_aluno = ?", [id])
    return rows[0];
}

export async function criarPlanoDAO({nome_plano,objetivo,duracao_semanas,nivel,frequencia_semanal,id_aluno,id_instrutor,}) {
	const [rows] = await db.query(
		"insert into plano_treino (nome_plano, objetivo, duracao_semanas, nivel, frequencia_semanal, id_aluno, id_instrutor) values (?, ?, ?, ?, ?, ?, ?)",[nome_plano,objetivo,duracao_semanas,nivel,frequencia_semanal,id_aluno,id_instrutor,]);
	return rows.insertId;
}