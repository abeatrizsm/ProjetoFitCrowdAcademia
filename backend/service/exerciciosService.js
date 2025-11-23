import { listarExerciciosDAO } from "../dao/exerciciosDAO.js";

export async function listarExerciciosService() {
	const exercicios = await listarExerciciosDAO();
	return { sucesso: true, exercicios };
}
