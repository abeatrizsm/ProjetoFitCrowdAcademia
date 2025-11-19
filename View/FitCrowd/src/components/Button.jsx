
import { NavLink } from "react-router-dom";

export default function Button({ icon, texto, to }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex items-center gap-3 w-full px-5 py-3 mt-2 rounded-xl font-semibold ${
					isActive
						? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]"
						: "text-gray-300 hover:bg-[#1a1d24] hover:text-white"
				}`
			}
		>
			{icon && <span className="text-xl">{icon}</span>}
			<span>{texto}</span>
		</NavLink>
	);
}
