import academiaLogo from "../assets/academia.png";

export default function LogoComponent({tamanho_imagem, tamanho_fundo, borda}){
    return (
			<div
				className={`flex bg-gradient-to-br from from-purple-500 to-red-500 ${borda} ${tamanho_fundo} shadow-[0_0_40px_rgba(255,0,0,0.6)] justify-center items-center text-center`}
			>
				<img src={academiaLogo} alt="Logo" className={tamanho_imagem} />
			</div>
		);
}

