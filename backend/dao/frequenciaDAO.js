import db from "../config/db.js";
import dayjs from "dayjs";

export async function salvarFrequencia(id, presenca, data) {
	const dataFormatada = dayjs(data).format("YYYY-MM-DD HH:mm:ss");
	await db.query(
		"insert into frequencia(data_aula, presenca, id_aluno) values(?,?,?)",
		[dataFormatada, presenca, id]
	);
}
export async function verificarCheckInDoDia(id) {
	const hoje = dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss");
	const amanha = dayjs()
		.add(1, "day")
		.startOf("day")
		.format("YYYY-MM-DD HH:mm:ss");

	return (
		await db.query(
			"SELECT * FROM frequencia WHERE id_aluno = ? AND data_aula >= ? AND data_aula < ?",
			[id, hoje, amanha]
		)
	)[0];
}
