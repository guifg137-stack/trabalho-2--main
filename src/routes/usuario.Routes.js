import usuarioController from "../controllers/usuario.Controller.js";
import { Router } from "express";

const usuarioRouter = Router();

usuarioRouter.get("/usuario", usuarioController.findAllusuarioController);
usuarioRouter.get("/usuario/:id", usuarioController.findusuarioByIdController);
usuarioRouter.post("/usuario", usuarioController.createusuarioController);
usuarioRouter.put("/usuario/:id", usuarioController.updateusuarioController);
usuarioRouter.delete("/usuario/:id", usuarioController.deleteusuarioController);

export default usuarioRouter;