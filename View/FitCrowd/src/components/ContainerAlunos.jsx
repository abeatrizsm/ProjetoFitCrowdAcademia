
export default function ContainerAlunos() {

    return (
			<div className="flex mt-5 p-4 bg-[#191d24] border border-[#2b303b] rounded-2xl w-full h-20">
				<div className="flex flex-col ml-3">
					<h2 className="font-semibold text-white ">Lucas Almeida</h2>
					<h2 className="text-gray-400 text-sm">lucasAlmeida@gmail.com</h2>
				</div>

				<div className="ml-auto flex flex-col justify-center pr-3">
					<div className="flex gap-1 ">
						<span className="rounded-full text-gray-300 font-semibold text-sm">
							Ingresso:
						</span>
						<h2 className="text-gray-400 text-sm">23/1/2006</h2>
					</div>
					<div className="flex gap-1 ">
						<span className="rounded-full text-gray-300 font-semibold text-sm">
							Treinos:
						</span>
						<h2 className="text-gray-400 text-sm">120</h2>
					</div>
				</div>
			</div>
		);
}
