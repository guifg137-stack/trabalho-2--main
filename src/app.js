import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
const app = express();
app.use(express.json());
app.use(usuarioRoutes);
export default app;
