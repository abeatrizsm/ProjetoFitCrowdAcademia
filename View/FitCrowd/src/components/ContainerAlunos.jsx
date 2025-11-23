import { MdAddTask, MdCalendarToday } from "react-icons/md";

export default function ContainerAlunos({ aluno, abrirModalPlanoFn }) {
	return (
		<div className=" flex flex-col p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full h-56">
			<div className="flex flex-col">
				<h2 className="text-white font-bold text-2xl pb-1 flex gap-2">{aluno.nome}</h2>
				<p className="text-gray-400 pb-4">{aluno.email}</p>
				<div className="flex gap-16">
					<p className="text-white text-lg flex gap-1"><span className="text-red-600"><MdCalendarToday className="mt-1"/></span>Ingresso: {new Date(aluno.data_ingresso).toLocaleDateString("pt-BR")}</p>
					<p className="text-white text-lg flex gap-1"><span className="text-red-600"><MdAddTask className="mt-1"/></span>Treinos Concluidos: {aluno.treinos_concluidos}</p>
				</div>
				<button
					onClick={() => abrirModalPlanoFn(aluno)}
					className="w-full bg-[#101318] border border-[#2b303b] text-white rounded-2xl py-2 mt-6"
				>
					Ver Plano Treino
				</button>

			</div>
		</div>
	);
}
