import { useState } from "react";
import "./App.css";
import LoginPage from "./telas/LoginView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RotaProtegida } from "./components/RotaProtegida";
import DashboardView from "./telas/DashboardView";
import PerfilView from "./telas/PerfilView";
import TreinosView from "./telas/TreinosView";
import { Toaster } from "react-hot-toast";
import InstrutorDashboard from "./telas/InstrutorDashboard";
import InstrutorTreinos from "./telas/InstrutorTreinos";
import InstrutorPlanos from "./telas/InstrutorPlanos";
import InstrutorExercicios from "./telas/InstrutorExercicios";

function App() {
	return (
		<>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						background: "#1e1e1e", // fundo bem dark
						color: "#fff", // texto branco
						border: "1px solid #333", // borda discreta igual à print
						padding: "12px 16px",
					},
				}}
				reverseOrder={false}
			/>
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route
						path="/dashboard"
						element={
							<RotaProtegida tipo="aluno">
								<DashboardView />
							</RotaProtegida>
						}
					></Route>
					<Route
						path="/treinos"
						element={
							<RotaProtegida tipo="aluno">
								<TreinosView />
							</RotaProtegida>
						}
					></Route>
					<Route
						path="/perfil"
						element={
							<RotaProtegida tipo="aluno">
								<PerfilView />
							</RotaProtegida>
						}
					></Route>
					<Route
						path="/instrutor"
						element={
							<RotaProtegida tipo="instrutor">
								<InstrutorDashboard />
							</RotaProtegida>
						}
					/>
					<Route
						path="/criarPlano"
						element={
							<RotaProtegida tipo="instrutor">
								<InstrutorPlanos />
							</RotaProtegida>
						}
					/>
					<Route
						path="/criarTreinos"
						element={
							<RotaProtegida tipo="instrutor">
								<InstrutorTreinos />
							</RotaProtegida>
						}
					/>
					<Route
						path="/criarExercicios"
						element={
							<RotaProtegida tipo="instrutor">
								<InstrutorExercicios />
							</RotaProtegida>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;


