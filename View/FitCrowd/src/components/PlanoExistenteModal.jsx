import { MdFitnessCenter, MdAlarm, MdGpsFixed, MdBolt } from "react-icons/md";

export default function PlanoExistenteModal({ plano, fechar }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-[#191d24] p-8 rounded-2xl border border-[#2b303b] w-5/12">
				<h2 className="text-white text-2xl font-bold mb-6 flex gap-2">
					<MdFitnessCenter className="text-red-600 text-3xl" />
					Plano de Treino
				</h2>

				<p className="text-white text-xl font-semibold mb-2">
					{plano.nome_plano}
				</p>

				<p className="text-gray-300 mb-6">Objetivo: {plano.objetivo}</p>

				<div className="flex justify-between mb-6">
					{/* Duração */}
					<div className="flex gap-3">
						<MdAlarm className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Duração</p>
							<p className="text-white font-semibold">
								{plano.duracao_semanas} semanas
							</p>
						</div>
					</div>

					{/* Frequência */}
					<div className="flex gap-3">
						<MdGpsFixed className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Frequência</p>
							<p className="text-white font-semibold">
								{plano.frequencia_semanal}x semana
							</p>
						</div>
					</div>

					{/* Nível */}
					<div className="flex gap-3">
						<MdBolt className="text-gray-400 text-2xl mt-1" />
						<div>
							<p className="text-gray-400 text-sm">Nível</p>
							<p className="text-white font-semibold">{plano.nivel}</p>
						</div>
					</div>
				</div>

				{/* Botão Criar Treino */}
				<button
					className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700"
					onClick={() => {
						// Aqui você vai abrir o modal de criar treino (OPÇÃO B)
						alert("Abrir modal de criar TREINO");
					}}
				>
					Criar Treino
				</button>

				{/* Fechar */}
				<div className="flex justify-end mt-6">
					<button
						className="text-gray-400 hover:text-gray-200"
						onClick={fechar}
					>
						Fechar
					</button>
				</div>
			</div>
		</div>
	);
}
