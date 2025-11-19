import { MdTaskAlt } from "react-icons/md";

export default function ContainerTreinos({ presenca, data }) {
	const presente = presenca === "Presente";

	function formatarData(d) {
        const dt = new Date(d);

		const data = dt.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});

		const hora = dt.toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		});

		return `${data} às ${hora}`;
	}

	return (
		<div className="flex mt-5 p-4 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full h-20">
			<div className="bg-[#2c1e24] rounded-full w-12 h-12 flex justify-center items-center">
				<MdTaskAlt className="text-red-600 text-2xl" />
			</div>
			<div className="flex flex-col ml-3">
				<h2 className="font-semibold text-white ">Treino</h2>
				<h2 className="text-gray-400 text-sm">{formatarData(data)}</h2>
			</div>

			<div className="ml-auto flex items-center">
				<span
					className={`px-4 py-1 rounded-full text-white font-semibold ${
						presente ? "bg-purple-600" : "bg-red-600"
					}`}
				>
					{presenca}
				</span>
			</div>
		</div>
	);
}
