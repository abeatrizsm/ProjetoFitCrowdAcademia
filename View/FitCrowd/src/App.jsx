import { useState } from "react";
import "./App.css";
import LoginPage from "./telas/LoginView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RotaProtegida } from "./components/RotaProtegida";
import DashboardView from "./telas/DashboardView";
import PerfilView from "./telas/PerfilView";
import TreinosView from "./telas/TreinosView";
import { Toaster } from "react-hot-toast";

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
							<RotaProtegida>
								<DashboardView />
							</RotaProtegida>
						}
					></Route>
					<Route
						path="/treinos"
						element={
							<RotaProtegida>
								<TreinosView />
							</RotaProtegida>
						}
					></Route>
					<Route
						path="/perfil"
						element={
							<RotaProtegida>
								<PerfilView />
							</RotaProtegida>
						}
					></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;

// export function RotaProtegida({ children, tipoPermitido }) {
//   const usuario = JSON.parse(localStorage.getItem("usuario"));

//   if (!usuario) return <Navigate to="/" replace />;

//   if (tipoPermitido && usuario.tipo !== tipoPermitido) {
//     return <Navigate to="/acesso-negado" replace />;
//   }

//   return children;
// }
// E usa assim:

// jsx
// Copiar código
// <Route
//   path="/dashboard-instrutor"
//   element={
//     <RotaProtegida tipoPermitido="instrutor">
//       <DashboardInstrutorView />
//     </RotaProtegida>
//   }
// />
