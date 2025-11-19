import { verificarAlteracao, validarSenha, listarPresenca } from "../service/alunosService.js";


export async function alterarDados(req, res) {
	const { nome, cpf, telefone, email } = req.body;
	const id = req.params.id;

	const resultado = await verificarAlteracao(nome, cpf, telefone, email, id);

	if (!resultado.sucesso) {
		return res.status(400).json(resultado);
	}
	return res.status(200).json(resultado);
}

export async function mudarSenha(req, res) {
	const {senha_nova, senha_confirmar} = req.body;
	const id = req.params.id

	const resultado = await validarSenha(senha_nova,senha_confirmar,id);
	
	if (!resultado.sucesso) {
		return res.status(400).json(resultado)
	}
	return res.status(200).json(resultado);
}

export async function obterHistorico(req, res) {
	const id = req.params.id;
	try{
		const resultado = await listarPresenca(id);
		return res.status(200).json(resultado)
	}
	 catch (erro) {
        return res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar histórico" });
    }
	
}