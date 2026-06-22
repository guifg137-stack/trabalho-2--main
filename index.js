import express from "express";
import usuarioRouters from "./src/routes/usuario.Routes.js"

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...")    
});