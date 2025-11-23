import { criarPlanoService, obterPlano } from "../service/planoTreinoService.js"

export async function procurarPlano(req, res) {
    const {id} = req.params

    try {
			const resultado = await obterPlano(id);
			return res.status(200).json(resultado);
		} 
        catch (erro) {
			console.error(erro);
			return res.status(500).json({
				sucesso: false,
				mensagem: "Erro ao buscar o plano de treino.",
			});
		}
}

export async function criarPlano(req, res) {
	const resultado = await criarPlanoService(req.body);
	return res.status(200).json(resultado);
}
