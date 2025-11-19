
import db from "../config/db.js";

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
