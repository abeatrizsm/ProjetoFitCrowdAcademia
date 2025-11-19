import { Navigate } from "react-router-dom";

export function RotaProtegida({ children }) {
	const usuario = localStorage.getItem("usuario");
	if (!usuario) {
		return <Navigate to="/" replace />;
	}
	return children;
}