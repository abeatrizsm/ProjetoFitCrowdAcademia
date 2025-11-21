import {MdAddCircleOutline,MdFitnessCenter,MdLogout, MdBallot, MdAccessibility} from "react-icons/md";
import LogoComponent from "./LogoComponent";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function InstrutorNavBar() {
	const navegacao = useNavigate();

	function handleLogout(){
		localStorage.removeItem("usuario")
		navegacao("/")
	}
	return (
		<div className="flex flex-col w-1/6 bg-[#14181f] h-screen border-r border-r-gray-700 ">
			<div className="flex justify-start items-center w-full h-28 pl-5 bg-[#14181f] border-b border-b-gray-700 ">
				<LogoComponent
					tamanho_fundo={"h-12 w-12"}
					tamanho_imagem={"w-6"}
					borda={"rounded-2xl"}
				></LogoComponent>
				<div className="flex flex-col ml-3">
					<h2 className="bg-gradient-to-br from-purple-400 to-red-500 bg-clip-text text-transparent text-lg font-bold ">
						{" "}
						FitCrowd{" "}
					</h2>
					<p className="text-gray-300 text-xs">Painel Administrador</p>
				</div>
			</div>
			<div className="m-6">
				<Button icon={<MdAccessibility />} texto="Alunos" to="/instrutor" />
				<Button icon={<MdBallot />} texto="Planos" to="/criarPlano" />
				<Button icon={<MdFitnessCenter />} texto="Treinos" to="/criarTreinos" />
				<Button
					icon={<MdAddCircleOutline />}
					texto="Exercicios"
					to="/criarExercicios"
				/>
			</div>
			<div className="flex flex-col items-start justify-center mt-auto p-10 w-full h-8 border-t border-t-gray-700">
				<button
					onClick={handleLogout}
					className="flex items-center gap-2 text-red-600 font-bold hover:text-red-900"
				>
					<MdLogout size={22} />
					Sair
				</button>
			</div>
		</div>
	);
}
