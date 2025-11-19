import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";

export default function DashboardView() {
	return (
		<div className="flex h-screen overflow-hidden">
			<NavBar />
            <div className="flex-1 overflow-y-auto dashboard-scroll">

			<Dashboard />
            </div>
		</div>
	);
}
