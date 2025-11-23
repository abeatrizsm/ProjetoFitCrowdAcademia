import express from "express"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import frequenciaRoutes from "./routes/frequenciaRoutes.js";
import treinoRoutes from "./routes/treinosRoutes.js";
import planoTreinoRoutes from "./routes/planoTreinoRoutes.js";
import instrutorRoutes from "./routes/instrutorRoutes.js";
import exerciciosRoutes from "./routes/exerciciosRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)
app.use("/api", frequenciaRoutes);
app.use("/api", treinoRoutes);
app.use("/api", planoTreinoRoutes);
app.use("/api", instrutorRoutes);
app.use("/api", exerciciosRoutes);

const porta = 3000;

app.listen(porta, () =>{
    console.log("servidor rodando em http://localhost:" + porta);
})

