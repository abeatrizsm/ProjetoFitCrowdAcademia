import { validarFrequencia } from "../service/frequenciaService.js";

export async function registrarFrequencia(req, res) {
	const id = req.params.id;
	const { data, presenca } = req.body;

	try {
		const resultado = await validarFrequencia(id, presenca, data);
		return res.status(200).json(resultado);
	} 
    catch (erro) {
		console.error(erro);
		return res.status(500).json({
			sucesso: false,
			mensagem: "Erro ao registrar frequencia.",
		});
	}
}



