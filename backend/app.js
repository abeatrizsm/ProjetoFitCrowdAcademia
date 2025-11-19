import express from "express"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import frequenciaRoutes from "./routes/frequenciaRoutes.js";
import treinoRoutes from "./routes/treinosRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)
app.use("/api", frequenciaRoutes);
app.use("/api", treinoRoutes);


const porta = 3000;

app.listen(porta, () =>{
    console.log("servidor rodando em http://localhost:" + porta);
})

