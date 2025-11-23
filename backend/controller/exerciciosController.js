import { listarExerciciosService } from "../service/exerciciosService.js";

export async function listarExercicios(req, res) {
	const resultado = await listarExerciciosService();
	return res.status(200).json(resultado);
}
