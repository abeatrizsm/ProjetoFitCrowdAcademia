import LogoComponent from "./LogoComponent";

export default function LogoSection() {
	return (
		<div className="flex flex-col justify-center items-center bg-gradient-to-br from from-red-800 to-purple-800 h-screen w-1/2 ">
			<div className="flex flex-col items-center text-center max-w-md">
				<LogoComponent
					tamanho_imagem={"w-16"}
					tamanho_fundo={"h-32 w-32"}
					borda={"rounded-3xl"}
				></LogoComponent>
				<h2 className="mt-10 m-2 font-extrabold text-white text-7xl">
					FitCrowd
				</h2>
				<p className="text-2xl text-white">
					Onde sua jornada fitness encontra a comunidade
				</p>
			</div>
		</div>
	);
}
























// export default function PromoSection() {
// 	return (
// 		<div className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-red-700 via-red-500 to-purple-700 text-white p-10 rounded-l-2xl">
// 			<div className="flex flex-col items-center text-center max-w-md">
// 				<img src="/logo.svg" alt="FitCrowd" className="w-20 mb-6" />
// 				<h1 className="text-5xl font-extrabold mb-3">FitCrowd</h1>
// 				<p className="text-lg mb-10 opacity-90">
// 					Onde sua jornada fitness encontra a comunidade
// 				</p>
// 				<div className="flex gap-6">
// 					<div className="bg-black/40 px-6 py-3 rounded-xl">
// 						<span className="text-2xl font-bold text-red-400">500+</span>
// 						<p className="text-sm">Membros Ativos</p>
// 					</div>
// 					<div className="bg-black/40 px-6 py-3 rounded-xl">
// 						<span className="text-2xl font-bold text-purple-300">1.2k</span>
// 						<p className="text-sm">Treinos/Semana</p>
// 					</div>
// 					<div className="bg-black/40 px-6 py-3 rounded-xl">
// 						<span className="text-2xl font-bold text-blue-300">95%</span>
// 						<p className="text-sm">Satisfação</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
