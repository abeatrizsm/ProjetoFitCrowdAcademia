import { MdAdd } from "react-icons/md";
import ContainerTreinoInstrutor from "./ContainerTreinoInstrutor";

export default function InstrutorCadastrarTreinos() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    
    return (
			<div className="bg-[#101318] flex flex-col p-12 overflow-y-auto w-5/6">
				<div className="flex pr-auto ">
					<div className="flex flex-col">
						<h2 className="text-white font-bold text-5xl pb-4">
							Planos de treinos
						</h2>
						<p className="text-gray-300 text-lg pb-5">
							Gerencie os treinos criados
						</p>
					</div>
					<div className="ml-auto">
						<button
							className="flex items-center gap-2 px-5 py-3 mt-2 rounded-xl font-semibold 
                        bg-red-600 text-white hover:bg-red-800"
						>
							<MdAdd size={22} /> Novo Treino
						</button>
					</div>
				</div>
				<div className="gap-8 flex ">
					<ContainerTreinoInstrutor />
					<ContainerTreinoInstrutor />
				</div>
				<div className="gap-8 flex ">
					<ContainerTreinoInstrutor />
					<ContainerTreinoInstrutor />
				</div>
			</div>
		);
}
