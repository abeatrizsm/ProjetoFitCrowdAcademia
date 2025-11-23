import db from "../config/db.js";

export async function listarExerciciosDAO() {
	const [rows] = await db.query(
		"select id_exercicio, nome, grupo_muscular, repeticoes, series from exercicios order by nome asc"
	);
	return rows;
}
