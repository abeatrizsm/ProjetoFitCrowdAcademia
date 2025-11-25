import { useState } from "react";
import { criarAluno } from "../services/instrutorService";
import toast from "react-hot-toast";

export default function CriarAlunoModal({ fechar }) {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cpf, setCpf] = useState("");

	async function salvar() {
		const resposta = await criarAluno({ nome, email, senha, telefone, cpf });
		if (resposta.sucesso) {
			toast.success("Aluno criado!");
			fechar();
		} else {
			toast.error(resposta.mensagem);
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-[#191d24] border border-[#2b303b] p-6 rounded-2xl w-5/12">
				<h2 className="text-white font-bold text-xl mb-4">Cadastrar novo Aluno</h2>

				<label className="text-gray-300 text-base font-semibold">Nome:</label>
				<input
					className="w-full mb-4 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
                    
				/>

				<label className="text-gray-300 text-base font-semibold">Email:</label>
				<input
					className="w-full mb-4 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
                    
				/>

				<label className="text-gray-300 text-base font-semibold">Senha:</label>
				<input
					type="password"
					className="w-full mb-4 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
                    
				/>

				<label className="text-gray-300 text-base font-semibold">Telefone:</label>
				<input
					className="w-full mb-4 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
					value={telefone}
					type="tel"
                    
					onChange={(e) => setTelefone(e.target.value)}
				/>
				<label className="text-gray-300 text-base font-semibold">CPF:</label>
				<input
					className="w-full mb-6 px-4 py-3 rounded-xl bg-[#191d24] border border-[#2b303b] text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 "
					value={cpf}
					onChange={(e) => setCpf(e.target.value)}
                    
				/>

				<div className="flex justify-end gap-7">
					<button
						className="text-gray-300 hover:text-gray-500"
						onClick={fechar}
					>
						Cancelar
					</button>
					<button
						onClick={salvar}
						className="bg-red-600 px-6 py-2 text-white rounded-md "
					>
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
}
