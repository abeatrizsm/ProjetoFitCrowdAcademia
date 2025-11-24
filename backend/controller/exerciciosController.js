import { cadastrarExercicioService, listarExerciciosService } from "../service/exerciciosService.js";

export async function listarExercicios(req, res) {
	const resultado = await listarExerciciosService();
	return res.status(200).json(resultado);
}
export async function cadastrarExercicio(req, res) {
    const { nome, grupo_muscular, repeticoes, series } = req.body;
    const resultado = await cadastrarExercicioService(nome, grupo_muscular, repeticoes, series);
    return res.status(200).json(resultado);
}