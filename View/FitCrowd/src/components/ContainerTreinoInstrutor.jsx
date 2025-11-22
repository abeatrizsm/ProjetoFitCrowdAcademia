import { MdAddTask, MdCalendarToday } from "react-icons/md";

export default function ContainerTreinoInstrutor({ titulo, subtitulo, icone, dado }) {
	return (
		<div className=" flex flex-col mt-9 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-1/2 h-56">
			<div className="flex flex-col">
				<h2 className="text-white font-bold text-2xl pb-1 flex gap-2">Treino A - Pernas:</h2>
				<p className="text-gray-300 pb-4">Descrição: Enfase em quadríceps e glúteos</p>
				<div className="flex gap-16">
					<p className="text-white text-lg flex gap-1"><span className="text-red-600"><MdAddTask className="mt-1"/></span>Número de Exercicios: 5</p>
					<p className="text-white text-lg flex gap-1"><span className="text-red-600"><MdCalendarToday className="mt-1"/></span>Dia da semana: Quinta</p>
				</div>
			</div>
			<button className="w-full bg-[#101318] border border-[#2b303b] text-white rounded-2xl py-2 mt-6">
				Ver Exercicios
			</button>
		</div>
	);
}
