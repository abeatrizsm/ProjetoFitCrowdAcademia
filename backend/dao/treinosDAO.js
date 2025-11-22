import db from "../config/db.js";

export async function listarTreinosDAO() {
	const [rows] = await db.query("select id_treino, nome_treino, descricao, dia_semana from treinos order by id_treino desc");
	return rows;
}

export async function criarTreinoDAO(id_plano, nome_treino, descricao, dia_semana) {
    const [rows] = await db.query("insert into treinos (id_plano, nome_treino, descricao, dia_semana) values (?, ?, ?, ?)", [id_plano, nome_treino, descricao, dia_semana]);
    return rows.insertId;
}

export async function adicionarExercicioDAO(id_treino, id_exercicio, ordem) {
    const [rows] = await db.query("insert into treinos_exercicios (id_treino, id_exercicio, ordem) values (?, ?, ?)",[id_treino, id_exercicio, ordem]);
    return rows;
}

export async function buscarTreinosPorDia(idAluno, diaSemana) {
	const sql = `
        select 
            t.id_treino,
            t.nome_treino,
            t.descricao,
            t.dia_semana,

            e.id_exercicio,
            e.nome as nome_exercicio,
            e.grupo_muscular,
            e.repeticoes,
            e.series,

            te.ordem

        from plano_treino p
        join treinos t on p.id_plano = t.id_plano
        left join treinos_exercicios te on t.id_treino = te.id_treino
        left join exercicios e on te.id_exercicio = e.id_exercicio
        where p.id_aluno = ?
        and t.dia_semana = ?
        order by t.id_treino, te.ordem;
    `;

	const [linhas] = await db.query(sql, [idAluno, diaSemana]);
	return linhas;
}
