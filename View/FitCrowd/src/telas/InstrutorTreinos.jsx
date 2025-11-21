import InstrutorCadastrarAluno from "../components/InstrutorCadastrarAluno";
import InstrutorNavBar from "../components/InstrutorNavBar";

export default function InstrutorTreinos() {
    return (
        <div className="flex h-screen">
            <InstrutorNavBar></InstrutorNavBar>
            <InstrutorCadastrarAluno />
        </div>
    );
}
