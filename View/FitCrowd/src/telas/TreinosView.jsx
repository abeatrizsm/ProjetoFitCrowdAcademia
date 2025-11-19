import NavBar from "../components/NavBar";
import Treinos from "../components/Treinos";

export default function TreinosView() {
	return (
		<div className="flex h-screen overflow-hidden">
			<NavBar />
			<div className="flex-1 overflow-y-auto dashboard-scroll">
				<Treinos />
			</div>
		</div>
	);
}
