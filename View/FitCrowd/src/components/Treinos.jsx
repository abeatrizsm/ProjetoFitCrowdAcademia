import { useEffect, useState } from "react";
import { MdFitnessCenter, MdAlarm, MdGpsFixed, MdEmojiEvents, MdBolt } from "react-icons/md";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { buscarTreinosDia } from "../services/treinoService";
import ContainerExercicio from "./ContainerExercicio";
import { obterPlanoTreino } from "../services/planoTreinoService";


export default function Treinos() {
	const usuario = JSON.parse(localStorage.getItem("usuario"));
	const [treinosDia, setTreinosDia] = useState([]);
	const [plano, setPlano] = useState(null);

	async function carregarTreinos(dia) {
		console.log("ID enviado:", usuario.id_aluno);
		console.log("Dia enviado:", dia);

		const resposta = await buscarTreinosDia(usuario.id_aluno, dia);
		if (resposta.sucesso) {
			setTreinosDia(resposta.treinos);
		}
	}
	async function carregarPlano() {
		const resposta = await obterPlanoTreino(usuario.id_aluno);
		if (resposta.sucesso) {
			setPlano(resposta.plano);
		}
	}

	useEffect(() => {
		carregarPlano();
		carregarTreinos("Segunda");
	}, []);

	return (
		<div className="bg-[#101318] flex flex-col p-12 w-full h-screen overflow-y-auto">
			<h2 className="text-white font-bold text-5xl">Meu plano de treino</h2>
			<p className="text-gray-400 text-lg mt-4">
				Treino criado por {plano?.nome || "..."}
			</p>
			<div
				className={`flex flex-col mt-7 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full h-36 gap-2  pr-56 mb-7`}
			>
				<div className="flex gap-2">
					<MdFitnessCenter className="text-red-600 text-2xl mt-1" />
					<h2 className="text-white font-semibold text-xl">{plano?.nome_plano || "Sem treino ainda."}</h2>
				</div>
				<div className="flex justify-between">
					<div className="flex gap-3">
						<MdAlarm className="text-gray-400 text-2xl mt-5" />
						<div className="flex flex-col mt-2">
							<p className="text-gray-400 text-base">Duração desejada:</p>
							<p className="text-white font-semibold">{plano?.duracao_semanas ? `${plano.duracao_semanas} semanas` : ""}</p>
						</div>
					</div>

					<div className="flex gap-3">
						<MdGpsFixed className="text-gray-400 text-2xl mt-5" />
						<div className="flex flex-col mt-2">
							<p className="text-gray-400 text-base">Frequência:</p>
							<p className="text-white font-semibold"> {plano?.frequencia_semanal ? `${plano.frequencia_semanal}x por semana` : ""}</p>
						</div>
					</div>

					<div className="flex gap-3">
						<MdBolt className="text-gray-400 text-2xl mt-5" />
						<div className="flex flex-col mt-2">
							<p className="text-gray-400 text-base">Nível:</p>
							<p className="text-white font-semibold">{plano?.nivel || ""}</p>
						</div>
					</div>
				</div>
			</div>

			<TabGroup
				onChange={(index) => {
					const dias = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];
					console.log("TAB SELECIONADA:", dias[index]);
					carregarTreinos(dias[index]);
				}}
			>
				<TabList className="bg-[#363d49] rounded-xl flex p-1 mt-7">
					<Tab
						className={({ selected }) =>
							`flex-1 text-center py-1 rounded-xl text-sm font-semibold ${
								selected ? "bg-[#101318] text-white" : "text-gray-300"
							}`
						}
					>
						Segunda
					</Tab>
					<Tab
						className={({ selected }) =>
							`flex-1 text-center py-1 rounded-xl text-sm font-semibold ${
								selected ? "bg-[#101318] text-white" : "text-gray-300"
							}`
						}
					>
						Terca
					</Tab>
					<Tab
						className={({ selected }) =>
							`flex-1 text-center py-1 rounded-xl text-sm font-semibold ${
								selected ? "bg-[#101318] text-white" : "text-gray-300"
							}`
						}
					>
						Quarta
					</Tab>
					<Tab
						className={({ selected }) =>
							`flex-1 text-center py-1 rounded-xl text-sm font-semibold ${
								selected ? "bg-[#101318] text-white" : "text-gray-300"
							}`
						}
					>
						Quinta
					</Tab>
					<Tab
						className={({ selected }) =>
							`flex-1 text-center py-1 rounded-xl text-sm font-semibold ${
								selected ? "bg-[#101318] text-white" : "text-gray-300"
							}`
						}
					>
						Sexta
					</Tab>
				</TabList>

				<TabPanels className="mt-5">
					<TabPanel>
						<ConteudoTreino treinosDia={treinosDia} />
					</TabPanel>
					<TabPanel>
						<ConteudoTreino treinosDia={treinosDia} />
					</TabPanel>
					<TabPanel>
						<ConteudoTreino treinosDia={treinosDia} />
					</TabPanel>
					<TabPanel>
						<ConteudoTreino treinosDia={treinosDia} />
					</TabPanel>
					<TabPanel>
						<ConteudoTreino treinosDia={treinosDia} />
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</div>
	);
}

function ConteudoTreino({ treinosDia }) {
	return (
		<div className="bg-[#191d24] border border-[#2b303b] rounded-2xl p-5">
			{treinosDia.length === 0 ? (
				<p className="text-gray-400 text-center py-10 text-lg">
					Nenhum treino para hoje!
				</p>
			) : (
				treinosDia.map((treino) => (
					<div key={treino.id_treino} className="mb-6">
						<h2 className="text-white font-bold text-xl">
							{treino.nome_treino}
						</h2>
						{treino.exercicios.map((ex) => (
							<ContainerExercicio key={ex.id_exercicio} exercicio={ex} />
						))}
					</div>
				))
			)}
		</div>
	);
}
