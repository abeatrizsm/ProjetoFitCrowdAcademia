import { MdTaskAlt, MdCalendarMonth, MdSchedule, MdDone, MdGrade } from "react-icons/md";
import ContainerTreinos from "./ContainerTreinos";
import ContainerStatus from "./ContainerStatus";
import { useEffect, useState } from "react";
import { buscarHistorico } from "../services/alunosService";
import toast from "react-hot-toast";
import { registrarCheckIn } from "../services/frequenciaService";


export default function Dashboard(){
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const [historico, setHistorico] = useState([]);
	console.log(usuario)

	async function carregarHistorico() {
		const resposta = await buscarHistorico(usuario.id_aluno)
		if (resposta.sucesso) {
			setHistorico(resposta.historico)
		}
	}

	async function handleCheckIn() {
		const resposta = await registrarCheckIn(usuario.id_aluno, {data: new Date(), presenca: "Presente",});

		if (resposta.sucesso) {
			toast.success("Check-in registrado!");
			carregarHistorico();
		} else {
			toast.error(resposta.mensagem);
		}
	}

	useEffect(()=>{
		carregarHistorico();
	},[])
    return (
			<div className="bg-[#101318] flex flex-col p-12 overflow-y-auto">
				<h2 className="text-white font-bold text-5xl pb-4">
					Olá, {usuario.nome}!
				</h2>
				<p className="text-white text-lg pb-9">
					Pronto(a) para superar seus limites hoje?
				</p>
				<div className="flex gap-x-3">
					<div className="flex p-6 pl-8 pr-8 bg-gradient-to-r from-red-600 to-purple-600 w-full h-28 rounded-2xl ">
						<div className="flex flex-col">
							<h2 className="text-2xl font-bold text-white pb-2">
								Realizar Check-in
							</h2>
							<p className="text-gray-100">
								Registre sua presença no treino de hoje!
							</p>
						</div>
						<div className="ml-auto pt-3">
							{/* #551bb3 */}
							<button
								onClick={handleCheckIn}
								className="bg-[#663399] hover:bg-purple-900 text-white shadow-[0_0px_20px_rgba(100,100,100,0.6)] font-semibold rounded-xl w-40 h-12 flex gap-2 justify-center items-center"
							>
								<MdTaskAlt />
								Check-in
							</button>
						</div>
					</div>
				</div>
				{/* <div className="flex gap-6">
					<ContainerStatus
						titulo={"Dias ativos:"}
						icone={<MdCalendarMonth />}
						subtitulo={"Desde a matricula"}
						dado={usuario.dias_ativos}
					></ContainerStatus>
					<ContainerStatus
						titulo={"Treinos realizados:"}
						icone={<MdDone />}
						subtitulo={"Concluidos com sucesso!"}
						dado={usuario.treinos_concluidos}
					></ContainerStatus>
					<ContainerStatus
						titulo={"Sequencia Atual"}
						icone={<MdGrade />}
						subtitulo={"dias consecultivos"}
						dado={"7"}
					></ContainerStatus>
				</div> */}
				<div className="flex flex-col w-full h-96 mt-10 bg-[#191d24] border border-[#2b303b] rounded-2xl p-6 pl-7">
					<h2 className="text-white font-semibold text-3xl">
						Histórico de Treinos
					</h2>
					<div className="h-72 overflow-y-scroll rounded-2xl pr-2">
						{historico.length == 0 ? (
							<div className="flex justify-center items-center h-full">
								<p className="text-gray-400 text-lg">
									Não há registro de treinos.
								</p>
							</div>
						) : (
							historico.map((item) => (
								<ContainerTreinos
									key={item.id_frequencia}
									presenca={item.presenca}
									data={item.data_aula}
								/>
							))
						)}
					</div>
				</div>
			</div>
		);
}
