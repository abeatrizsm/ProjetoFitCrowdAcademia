import { autenticarUsuario } from "../service/authService.js";
    
export async function autenticarLogin(req, res) {
    try{
        const {email, senha} = req.body;
        const resultado = await autenticarUsuario(email, senha);

        if(!resultado.sucesso){
            return res.status(401).json({mensagem: resultado.mensagem});
        }

        return res.status(200).json({
            mensagem: "login realizado com sucesso.",
            usuario: resultado.usuario,
            sucesso: resultado.sucesso,
            tipo: resultado.tipo,
        })
    } catch(erro){
        console.error("Erro no login", erro.message);
        res.status(500).json({mensagem: "Erro no authController - autenticarUsuario"});
    }
}