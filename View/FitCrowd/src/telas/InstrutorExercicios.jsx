import InstrutorCadastrarExercicio from "../components/InstrutorCadastrarExercicio";
import InstrutorNavBar from "../components/InstrutorNavBar";

export default function InstrutorExercicios() {
    return (
        <div className="flex h-screen">
            <InstrutorNavBar></InstrutorNavBar>
            <InstrutorCadastrarExercicio />
        </div>
    );
}
