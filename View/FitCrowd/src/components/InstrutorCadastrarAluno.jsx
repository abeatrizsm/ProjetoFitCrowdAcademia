import { MdAdd } from "react-icons/md";
import ContainerAlunos from "./ContainerAlunos";
import { useState, useEffect } from "react";
import CriarAlunoModal from "./CriarAlunoModal";
import { buscarAlunos } from "../services/instrutorService";
import CriarPlanoModal from "./CriarPlanoModal";
import { obterPlanoTreino } from "../services/planoTreinoService";
import PlanoExistenteModal from "./PlanoExistenteModal";


export default function InstrutorCadastrarAluno() {
	const usuario = JSON.parse(localStorage.getItem("usuario"));
	const [abrirModal, setAbrirModal] = useState(false);
	const [alunos, setAlunos] = useState([]);
	const [planoSelecionado, setPlanoSelecionado] = useState(null);
	const [abrirModalPlanoExistente, setAbrirModalPlanoExistente] = useState(false);
	const [alunoSelecionado, setAlunoSelecionado] = useState(null);
	const [abrirModalPlano, setAbrirModalPlano] = useState(false);

	async function abrirModalPlanoFn(aluno) {
		setAlunoSelecionado(aluno);

		const resposta = await obterPlanoTreino(aluno.id_aluno);

		if (resposta.sucesso && resposta.plano) {
			setPlanoSelecionado(resposta.plano);
			setAbrirModalPlanoExistente(true);
		} else {
			setAbrirModalPlano(true);
		}
	}

	async function carregarAlunos() {
		const resposta = await buscarAlunos();
		if (resposta.sucesso) {
			setAlunos(resposta.alunos);
		}
	}

	useEffect(() => {
		carregarAlunos();
	}, []);

	return (
		<div className="bg-[#101318] flex flex-col p-12 overflow-y-auto w-5/6">
			<div className="flex pr-auto ">
				<div className="flex flex-col">
					<h2 className="text-white font-bold text-5xl pb-4">
						Olá, {usuario.nome}!
					</h2>
					<p className="text-white text-lg pb-5">
						Gerencie seus todos os alunos e seus Planos.
					</p>
				</div>
				<div className="ml-auto">
					<button
						onClick={() => setAbrirModal(true)}
						className="flex items-center gap-2 px-5 py-3 mt-2 rounded-xl font-semibold 
                        bg-gradient-to-tr from-red-600 to-purple-600 text-white"
					>
						<MdAdd size={22} /> Novo Aluno
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-8 mt-6">
				{alunos.map((aluno) => (
					<ContainerAlunos
						key={aluno.id_aluno}
						aluno={aluno}
						abrirModalPlanoFn={abrirModalPlanoFn}
					/>
				))}
			</div>

			{abrirModal && (
				<CriarAlunoModal
					fechar={() => {
						setAbrirModal(false);
						carregarAlunos();
					}}
				/>
			)}

			{abrirModalPlano && (
				<CriarPlanoModal
					aluno={alunoSelecionado}
					fechar={() => setAbrirModalPlano(false)}
				/>
			)}

			{abrirModalPlanoExistente && (
				<PlanoExistenteModal
					plano={planoSelecionado}
					fechar={() => setAbrirModalPlanoExistente(false)}
				/>
			)}
		</div>
	);
}
