export default function ContainerExercicio({ exercicio }) {
	return (
		<div className="flex flex-col mt-2 py-3 px-5 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full gap-2">
			<h2 className="text-white font-semibold text-xl">{exercicio.nome}</h2>

			<div className="flex justify-between text-sm">
				<div>
					<p className="text-gray-400">Grupo muscular</p>
					<p className="text-white font-semibold">{exercicio.grupo_muscular}</p>
				</div>

				<div>
					<p className="text-gray-400">Séries</p>
					<p className="text-white font-semibold">{exercicio.series}</p>
				</div>

				<div>
					<p className="text-gray-400">Repetições</p>
					<p className="text-white font-semibold">{exercicio.repeticoes}</p>
				</div>
			</div>
		</div>
	);
}
