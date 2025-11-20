import { Navigate } from "react-router-dom";

export function RotaProtegida({ children, tipo }) {
	const usuario = localStorage.getItem("usuario");
	if (!usuario) {
		return <Navigate to="/" replace />;
	}
	const usuarioJSON = JSON.parse(usuario);

	if (tipo && usuarioJSON.tipo != tipo) {
		if (usuarioJSON.tipo == "instrutor") {
			return <Navigate to="/instrutor" replace />;
		}

		return <Navigate to="/dashboard" replace />;
	}

	return children;
}
