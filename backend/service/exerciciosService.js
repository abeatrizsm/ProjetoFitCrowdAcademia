import { cadastrarExercicioDAO, listarExerciciosDAO } from "../dao/exerciciosDAO.js";

export async function listarExerciciosService() {
	const exercicios = await listarExerciciosDAO();
	return { sucesso: true, exercicios };
}
export async function cadastrarExercicioService(nome, grupo_muscular, repeticoes, series) {
    if (!nome || nome.trim() === "")
        return { sucesso: false, mensagem: "Nome do exercício é obrigatório." };

    if (!grupo_muscular || grupo_muscular.trim() === "")
        return { sucesso: false, mensagem: "Grupo muscular é obrigatório." };

    if (!repeticoes && repeticoes !== 0)
        return { sucesso: false, mensagem: "Repetições são obrigatórias." };

    if (!series && series !== 0)
        return { sucesso: false, mensagem: "Séries são obrigatórias." };

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome))
        return { sucesso: false, mensagem: "O nome deve conter apenas letras." };

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(grupo_muscular))
        return { sucesso: false, mensagem: "Grupo muscular deve conter apenas letras." };

    if (!/^[0-9]+$/.test(repeticoes))
        return { sucesso: false, mensagem: "Repetições devem conter apenas números." };

    if (!/^[0-9]+$/.test(series))
        return { sucesso: false, mensagem: "Séries devem conter apenas números." };

    repeticoes = Number(repeticoes);
    series = Number(series);

    const resultado = await cadastrarExercicioDAO(nome, grupo_muscular, repeticoes, series);

    return { sucesso: true, mensagem: "Exercicio criado com sucesso!" };
}
