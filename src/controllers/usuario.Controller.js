import usuarioService from "../services/usuario.Service.js";
import { response } from "express";

async function findAllusuarioController(request, response) {
    try {
        const usuario = await usuarioService.findAllusuarioService();  
        response.status(200).send({usuario});
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function findusuarioByIdController(request, response) {
    const {id} = request.params;

    try {
        const usuario = await usuarioService.findusuarioByIdService(id);
        response.status(200).send({usuario});
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function createusuarioController(request, response) {
    const novousuario = request.body;    

    try {
        const usuario = await usuarioService.createusuarioService(novousuario);
        response.status(201).send(usuario);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function updateusuarioController(request, response) {

    const { id }      = request.params;
    const usuarioAtualizado = request.body;

    try {
        const usuario = await usuarioService.updateusuarioService(id, usuarioAtualizado);

        response.status(200).send({usuario});
    } catch(error) {
        response.status(400).send(error.message);
    }

}

async function deleteusuarioController(request, response) {
    const { id } = request.params;

    try {
        const retorno = await usuarioService.deleteusuarioService(id);
        response.status(200).send(retorno);
    } catch(error) {
        response.status(400).send(error.message);
    }

}

export default {
    findAllusuarioController,
    findusuarioByIdController,
    createusuarioController,
    updateusuarioController,
    deleteusuarioController
}