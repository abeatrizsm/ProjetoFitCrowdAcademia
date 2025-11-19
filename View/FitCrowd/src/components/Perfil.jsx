import { MdPerson, MdPhone, MdBadge, MdMail } from "react-icons/md";
import { useState } from "react";
import { alterarDadosUsuario, alterarSenhaUsuario } from "../services/alunosService";
import toast from "react-hot-toast";
export default function Perfil() {
	const usuario = JSON.parse(localStorage.getItem("usuario"));
	const id = usuario.id_aluno;
	const [nome, setNome] = useState(usuario.nome);
	const [email, setEmail] = useState(usuario.email);
	const [cpf, setCpf] = useState(usuario.cpf);
	const [telefone, setTelefone] = useState(usuario.telefone);
	const [senha, setSenha] = useState("");
	const [senhaConfirmar, setSenhaConfirmar] = useState("");

	async function handleSalvar() {
		try {
			const resposta = await alterarDadosUsuario(id, {nome,email,cpf,telefone});
			console.log(resposta);

			if (resposta.sucesso) {
				toast.success(resposta.mensagem)

				const usuarioAtualizado = {
					...usuario,
					nome,
					email,
					cpf,
					telefone,
				};
				localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
			} else {
				toast.error(resposta.mensagem);
			}
		} catch (erro) {
			console.error("Erro ao salvar:", erro);
		}
	}
	async function handleAlterar() {
		try{
			const resposta = await alterarSenhaUsuario(id, {
				senha_nova: senha,
				senha_confirmar: senhaConfirmar,
			});
			if (resposta.sucesso) {
				toast.success(resposta.mensagem)
			}
			else{
				toast.error(resposta.mensagem)
			}

		}catch(erro){
			console.error("Erro ao salvar senha:", erro);
		}	
	}

	return (
		<div className="bg-[#101318] flex flex-col p-12 w-5/6 h-screen">
			<h2 className="text-white  font-bold text-5xl">Meu perfil</h2>
			<div className="flex gap-7">
				<div
					className={`flex flex-col mt-7 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-2/3 h-3/12 gap-2`}
				>
					<h2 className="text-white text-2xl font-semibold">
						Informações Pessoais
					</h2>
					<div className="flex w-full mt-4">
						<div className="flex flex-col text-white font-semibold w-1/2 ">
							<h2>Nome Completo</h2>
							<div className="bg-[#101318] border mt-2 mr-5 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<MdPerson />
								<input
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									type="text"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
							<h2>CPF</h2>

							<div className="bg-[#101318] border mt-2 mr-5 mb-2 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<MdBadge />
								<input
									value={cpf}
									onChange={(e) => setCpf(e.target.value)}
									type="text"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
						</div>
						<div className="flex flex-col text-white font-semibold  w-1/2">
							<h2>Email</h2>
							<div className="bg-[#101318] border mt-2 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<MdMail />
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
							<h2>Telefone</h2>
							<div className="bg-[#101318] border mt-2 mb-4 border-gray-700 h-10 rounded-xl flex items-center p-2 pl-3 gap-3">
								<MdPhone />
								<input
									value={telefone}
									onChange={(e) => setTelefone(e.target.value)}
									type="tel"
									className="bg-transparent text-base font-light w-full"
								/>
							</div>
						</div>
					</div>
					<button onClick={handleSalvar} className="bg-red-600 rounded-2xl text-white w-full h-10 hover:bg-red-800"> Salvar alterações</button>
				</div>

				<div className={`flex flex-col mt-7 p-6 bg-[#191d24] border border-[#2b303b] rounded-2xl w-1/3 h-3/12 gap-2`}>
					<h2 className="text-white text-2xl font-semibold mb-4">Segurança</h2>
					<div className="flex flex-col text-white font-semibold w-full ">
						<h2>Senha nova</h2>
						<input
							value={senha}
							onChange={(e) => setSenha(e.target.value)}
							type="password"
							className="bg-[#101318] border mt-2  mb-4 border-gray-700 h-10 rounded-xl text-base font-light w-ful px-3"
						/>
						<h2>Confirmar senha</h2>
						<input
							value={senhaConfirmar}
							onChange={(e) => setSenhaConfirmar(e.target.value)}
							type="password"
							className="bg-[#101318] border mt-2  mb-4 border-gray-700 h-10 rounded-xl text-base font-light w-ful px-3"
						/>
					</div>
					<button onClick={handleAlterar} className="bg-red-600 rounded-2xl text-white w-full h-10 hover:bg-red-800">Alterar senha</button>
				</div>
			</div>
		</div>
	);
}
