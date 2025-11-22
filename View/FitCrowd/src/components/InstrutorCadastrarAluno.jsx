import { MdAdd } from "react-icons/md";
import ContainerAlunos from "./ContainerAlunos";
import { useState, useEffect } from "react";
import CriarAlunoModal from "./CriarAlunoModal";
import { buscarAlunos } from "../services/instrutorService";

export default function InstrutorCadastrarAluno() {
	const usuario = JSON.parse(localStorage.getItem("usuario"));
	const [abrirModal, setAbrirModal] = useState(false);
	const [alunos, setAlunos] = useState([]);

	async function carregarAlunos() {
		const resp = await buscarAlunos();
		if (resp.sucesso) {
			setAlunos(resp.alunos);
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
						Gerencie seus todos os seus alunos
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

			<div className="flex flex-col w-full h-5/6 bg-[#191d24] border border-[#2b303b] rounded-2xl p-6 pl-7">
				<h2 className="text-white font-semibold text-3xl">Lista de alunos</h2>

				<div className=" overflow-y-scroll rounded-2xl pr-2">
					{alunos.map((aluno) => (
						<ContainerAlunos key={aluno.id_aluno} aluno={aluno} />
					))}
				</div>
			</div>

			{abrirModal && (
				<CriarAlunoModal
					fechar={() => {
						setAbrirModal(false);
						carregarAlunos();
					}}
				/>
			)}
		</div>
	);
}
