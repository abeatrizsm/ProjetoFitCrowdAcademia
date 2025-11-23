import { useState, useEffect } from "react";
import { criarTreino, adicionarExerciciosNoTreino, buscarExercicios } from "../services/treinoService";
import toast from "react-hot-toast";

export default function CriarTreinoModal({ plano, fechar }) {
    const [nome_treino, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dia_semana, setDia] = useState("");

    const [exerciciosDisponiveis, setExDisp] = useState([]);
    const [exerciciosSelecionados, setExSel] = useState([]);

    async function carregarExercicios() {
        const resposta = await buscarExercicios();
        if (resposta.sucesso) setExDisp(resposta.exercicios);
    }

    useEffect(() => {
        carregarExercicios();
    }, []);

    function adicionar(exercicio) {
        if (exerciciosSelecionados.some(e => e.id_exercicio === exercicio.id_exercicio)) return;
        setExSel([...exerciciosSelecionados, exercicio]);
    }

    function remover(id_exercicio) {
        setExSel(exerciciosSelecionados.filter(e => e.id_exercicio !== id_exercicio));
    }

    async function salvarTreino() {
        const dados = { nome_treino, descricao, dia_semana, id_plano: plano.id_plano };

        const respTreino = await criarTreino(dados);

        if (!respTreino.sucesso) {
            toast.error(respTreino.mensagem);
            return;
        }

        const id_treino = respTreino.id_treino;

        const listaEx = exerciciosSelecionados.map((e, idx) => ({
            id_exercicio: e.id_exercicio,
            ordem: idx + 1
        }));

        await adicionarExerciciosNoTreino(id_treino, listaEx);

        toast.success("Treino criado com sucesso!");
        fechar();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#191d24] p-8 rounded-2xl border border-[#2b303b] w-7/12 h-[80vh] overflow-y-auto">

                <h2 className="text-white text-2xl font-bold mb-6">
                    Criar treino para o plano: {plano.nome_plano}
                </h2>

                <input className="inputModal" placeholder="Nome do treino"
                    value={nome_treino} onChange={e => setNome(e.target.value)} />

                <input className="inputModal" placeholder="Descrição"
                    value={descricao} onChange={e => setDescricao(e.target.value)} />

                <select className="inputModal"
                    value={dia_semana} onChange={e => setDia(e.target.value)}>
                    <option value="">Dia da semana</option>
                    <option>Segunda</option>
                    <option>Terça</option>
                    <option>Quarta</option>
                    <option>Quinta</option>
                    <option>Sexta</option>
                </select>

                <div className="flex gap-6 mt-6">
                    <div className="w-1/2">
                        <h2 className="text-white text-xl mb-2">Exercícios disponíveis</h2>

                        <div className="h-64 overflow-y-scroll border border-[#2b303b] rounded-xl p-3">
                            {exerciciosDisponiveis.map(ex => (
                                <div key={ex.id_exercicio}
                                    className="p-2 bg-[#101318] rounded mb-2 text-white flex justify-between">
                                    <span>{ex.nome}</span>
                                    <button className="text-green-400"
                                        onClick={() => adicionar(ex)}>
                                        +
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2">
                        <h2 className="text-white text-xl mb-2">Exercícios do treino</h2>

                        <div className="h-64 overflow-y-scroll border border-[#2b303b] rounded-xl p-3">
                            {exerciciosSelecionados.map(ex => (
                                <div key={ex.id_exercicio}
                                    className="p-2 bg-[#101318] rounded mb-2 text-white flex justify-between">
                                    <span>{ex.nome}</span>
                                    <button className="text-red-400"
                                        onClick={() => remover(ex.id_exercicio)}>
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-6 mt-8">
                    <button className="text-gray-300" onClick={fechar}>Cancelar</button>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-md"
                        onClick={salvarTreino}>Salvar Treino</button>
                </div>

            </div>
        </div>
    );
}
