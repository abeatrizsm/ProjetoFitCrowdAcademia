import { useState } from "react";
import { loginUsuario } from "../services/authServices";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
	const[email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [mensagem, setMensagem] = useState("");

	const navegar = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();

		const resposta = await loginUsuario(email,senha);
		
		if (resposta.sucesso) {
			localStorage.setItem("usuario", JSON.stringify({...resposta.usuario, tipo: resposta.tipo}))
			console.log(resposta)
			if (resposta.tipo === "instrutor") {
				navegar("/instrutor");
			} else {
				navegar("/dashboard");
			}
		}else{
			setMensagem(resposta.mensagem);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center w-1/2 bg-[#101318] h-screen p-20">
			<form onSubmit={handleLogin} className="w-full max-w-md">
				<h2 className=" text-white text-4xl font-bold mb-3">
					Bem-vindo, aluno!
				</h2>
				<p className="text-gray-400 text-base">
					Entre para começar sua evolução.
				</p>
				<label className="block text-white mb-3 mt-10">Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Insira seu email..."
					className="w-full mb-6 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
				/>
				<label className="block text-white mb-3">Senha:</label>
				<input
					type="password"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
					placeholder="Insira sua senha..."
					className="w-full rounded-xl mb-10 px-4 py-3 bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300"
				/>

				<button
					type="submit"
					className="w-full text-white bg-gradient-to-r from from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700  shadow-[0_0_40px_rgba(255,0,0,0.4)]  py-3 rounded-xl font-semibold "
				>
					Começar sua mudança
				</button>
				{mensagem && <p className="text-center text-white mt-5">{mensagem}</p>}
			</form>
		</div>
	);
}
