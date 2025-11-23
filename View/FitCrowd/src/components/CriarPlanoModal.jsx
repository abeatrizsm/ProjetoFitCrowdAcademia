import { useState } from "react";
import { criarPlano } from "../services/planoTreinoService";
import toast from "react-hot-toast";

export default function CriarPlanoModal({ aluno, fechar }) {
	const [nome_plano, setNomePlano] = useState("");
	const [objetivo, setObjetivo] = useState("");
	const [duracao_semanas, setDuracao] = useState("");
	const [nivel, setNivel] = useState("");
	const [frequencia_semanal, setFrequencia] = useState("");
	const usuario = JSON.parse(localStorage.getItem("usuario"));

	async function salvar() {
		const dados = {
			nome_plano,
			objetivo,
			duracao_semanas,
			nivel,
			frequencia_semanal,
			id_aluno: aluno.id_aluno,
            id_instrutor: usuario.id_instrutor
		};

		const resposta = await criarPlano(dados);

		if (resposta.sucesso) {
			toast.success("Plano criado!");
			fechar();
		} else {
			toast.error(resposta.mensagem);
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-[#191d24] p-8 rounded-2xl border border-[#2b303b] w-5/12">
				<h2 className="text-white text-2xl font-bold mb-6">
					Criar plano para {aluno.nome}
				</h2>

				<label className="text-gray-300">Nome do plano</label>
				<input
					className="inputModal"
					value={nome_plano}
					onChange={(e) => setNomePlano(e.target.value)}
				/>

				<label className="text-gray-300">Objetivo</label>
				<input
					className="inputModal"
					value={objetivo}
					onChange={(e) => setObjetivo(e.target.value)}
				/>

				<label className="text-gray-300">Duração (semanas)</label>
				<input
					type="number"
					className="inputModal"
					value={duracao_semanas}
					onChange={(e) => setDuracao(e.target.value)}
				/>

				<label className="text-gray-300">Nível</label>
				<select
					className="inputModal"
					value={nivel}
					onChange={(e) => setNivel(e.target.value)}
				>
					<option value="">Selecione</option>
					<option value="Iniciante">Iniciante</option>
					<option value="Intermediário">Intermediário</option>
					<option value="Avançado">Avançado</option>
				</select>

				<label className="text-gray-300">Frequência semanal</label>
				<input
					type="number"
					className="inputModal"
					value={frequencia_semanal}
					onChange={(e) => setFrequencia(e.target.value)}
				/>

				<div className="flex justify-end gap-6 mt-6">
					<button className="text-gray-300" onClick={fechar}>
						Cancelar
					</button>

					<button
						onClick={salvar}
						className="bg-red-600 text-white px-6 py-2 rounded-md"
					>
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
}
