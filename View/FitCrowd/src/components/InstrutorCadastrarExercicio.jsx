import { MdPerson, MdPhone, MdBadge, MdMail, MdLoop, MdRepeat, MdHighlightOff, MdClose } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { cadastrarNovoExercicio, excluirExercicio } from "../services/exerciciosServices";
import { useEffect } from "react";
import { buscarExercicios } from "../services/treinoService";

export default function InstrutorCadastrarExercicio() {
	const [nome, setNome] = useState("");
	const [grupoMuscular, setGrupoMuscular] = useState("");
	const [series, setSeries] = useState("");
	const [repeticao, setRepeticao] = useState("");
    const [exercicios, setExercicios] = useState([]);

		async function carregarExercicios() {
			const resposta = await buscarExercicios();
			if (resposta.sucesso) setExercicios(resposta.exercicios);
		}

		useEffect(() => {
			carregarExercicios();
		}, []);



	async function handleSalvar() {
		try {
			const resposta = await cadastrarNovoExercicio({nome,grupoMuscular,series,repeticao});

			if (resposta.sucesso) {
				carregarExercicios();
				toast.success(resposta.mensagem)
			} else {
				toast.error(resposta.mensagem);
			}
		} catch (erro) {
			console.error("Erro ao salvar:", erro);
		}
	}

	async function handleExcluir(id) {
		const resp = await excluirExercicio(id);

		if (resp.sucesso) {
			toast.success("Exercício excluído.");
			carregarExercicios();
		} else {
			toast.error(resp.mensagem);
		}
	}


	return (
		<div className="bg-[#101318] flex flex-col p-12 w-5/6 h-screen overflow-y-auto">
			<h2 className="text-white  font-bold text-5xl">Gerenciar exercicios</h2>
			<p className="text-white text-lg pb-5 mt-3">
				Gerencie todos os exercicios e cadastre novos.
			</p>
			<div className="flex gap-7">
				<div
					className={`flex flex-col mt-7 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full h-3/12 gap-2`}
				>
					<h2 className="text-white text-2xl font-semibold">
						Cadastrar exercicios:
					</h2>
					<div className="flex w-full mt-4">
						<div className="flex flex-col text-white font-semibold w-1/2 ">
							<h2>Nome do Exercicio:</h2>
							<div className="bg-[#101318] border mt-2 mr-5 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<input
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									type="text"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
							<h2>Grupo muscular de foco:</h2>

							<div className="bg-[#101318] border mt-2 mr-5 mb-2 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<input
									value={grupoMuscular}
									onChange={(e) => setGrupoMuscular(e.target.value)}
									type="text"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
						</div>
						<div className="flex flex-col text-white font-semibold  w-1/2">
							<h2>Series:</h2>
							<div className="bg-[#101318] border mt-2 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<input
									value={series}
									onChange={(e) => setSeries(e.target.value)}
									type="number"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
							<h2>Repetições:</h2>
							<div className="bg-[#101318] border mt-2 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<input
									value={repeticao}
									onChange={(e) => setRepeticao(e.target.value)}
									type="number"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
						</div>
					</div>
					<button
						onClick={handleSalvar}
						className="bg-red-600 rounded-2xl text-white w-full h-10 hover:bg-red-800"
					>
						Salvar alterações
					</button>
				</div>
			</div>
			<div className="bg-[#101318] flex flex-col  w-full h-screen">
				<div className="flex flex-col w-full h-96 mt-10 bg-[#191d24] border border-[#2b303b] rounded-2xl p-6 pl-7">
					<h2 className="text-white text-2xl font-semibold mb-3 mt-2">
						Exercicios cadastrados:
					</h2>

					<div className="h-72 overflow-y-scroll pr-2">
						{exercicios.length === 0 ? (
							<div className="flex justify-center items-center h-full">
								<p className="text-gray-400 text-lg">
									Nenhum exercício cadastrado.
								</p>
							</div>
						) : (
							exercicios.map((ex) => (
								<div
									key={ex.id_exercicio}
									className="bg-[#101318] border border-[#2b303b] rounded-xl p-4 mt-3 text-white flex justify-between"
								>
									<div>
										<div className="flex gap-1">
											<p className="font-bold text-lg">{ex.nome}:</p>
											<div className="text-lg flex flex-col">
												<p>{ex.series} x {ex.repeticoes} </p>
											</div>
										</div>
										<p className="text-gray-400">{ex.grupo_muscular}</p>
									</div>

									<div className="ml-auto">
										<button onClick={()=> handleExcluir(ex.id_exercicio)}><MdClose/></button>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
