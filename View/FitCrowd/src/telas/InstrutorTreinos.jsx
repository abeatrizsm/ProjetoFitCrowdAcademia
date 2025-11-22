import InstrutorCadastrarTreinos from "../components/InstrutorCadastrarTreinos";
import InstrutorNavBar from "../components/InstrutorNavBar";

export default function InstrutorTreinos() {
    return (
        <div className="flex h-screen">
            <InstrutorNavBar></InstrutorNavBar>
            <InstrutorCadastrarTreinos />
        </div>
    );
}
