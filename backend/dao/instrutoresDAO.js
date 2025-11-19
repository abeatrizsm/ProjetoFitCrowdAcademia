import db from "../config/db.js";

export async function buscarInstrutor(email){
    const [rows] = await db.query("select * from instrutores where email = ?", [email]);
    return rows[0];

}