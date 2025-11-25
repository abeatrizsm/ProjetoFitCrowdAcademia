import toast from "react-hot-toast";
import { MdFitnessCenter, MdAlarm, MdGpsFixed, MdBolt, MdArrowBack, MdArrowBackIos, MdArrowBackIosNew, MdOutlineClose } from "react-icons/md";
import { apagarPlano } from "../services/planoTreinoService";

export default function PlanoExistenteModal({ plano, abrirCriarTreino, fechar }) {
	async function handleApagar(plano) {
		const resposta = await apagarPlano(plano.id_plano);

		if (resposta.sucesso) {
			toast.success("Plano apagado.");
			fechar();
		} else {
			toast.error(resposta.mensagem);
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-[#191d24] p-8 rounded-2xl border border-[#2b303b] w-5/12">
				<div className="flex">
					<h2 className="text-white text-2xl font-bold mb-4 mt-3 flex gap-2">
						<MdFitnessCenter className="text-red-600 text-3xl" />
						Plano de Treino
					</h2>
					<div className="flex ml-auto">
						<button
							className="text-gray-400 hover:text-gray-200"
							onClick={fechar}
						>
							<MdOutlineClose size={30} />
						</button>
					</div>
				</div>
				<p className="text-white text-xl font-semibold mb-2">
					{plano.nome_plano}
				</p>

				<p className="text-gray-300 mb-6">Objetivo: {plano.objetivo}</p>

				<div className="flex gap-28 mb-6">
					<div className="flex gap-3">
						<MdAlarm className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Duração:</p>
							<p className="text-white font-semibold">
								{plano.duracao_semanas} semanas
							</p>
						</div>
					</div>

					<div className="flex gap-3">
						<MdGpsFixed className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Frequência:</p>
							<p className="text-white font-semibold">
								{plano.frequencia_semanal}x semana
							</p>
						</div>
					</div>

					<div className="flex gap-3">
						<MdBolt className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Nível:</p>
							<p className="text-white font-semibold">{plano.nivel}</p>
						</div>
					</div>
				</div>

				<div className="flex gap-5">
					<button
						className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700"
						onClick={() => handleApagar(plano)}
					>
						Apagar Plano
					</button>

					<button
						className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700"
						onClick={() => abrirCriarTreino(plano)}
					>
						Criar Treino
					</button>
				</div>
			</div>
		</div>
	);
}
