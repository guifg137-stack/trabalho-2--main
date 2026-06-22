import usuarioRepository from "../repositories/usuario.Repository.js";

async function findAllusuarioService() {
    const usuario = await usuarioRepository.findAllusuarioRepository();
    return usuario;
}
async function findusuarioByIdService(id) {
    const usuario = await usuarioRepository.findusuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("usuario não encontrado!");
    }

    return usuario;
}

async function createusuarioService(novousuario) {
    const usuario = await usuarioRepository.createusuarioRepository(novousuario);

    if (!usuario) {
        throw new Error("Erro ao criar novo usuario!");
    }

    return usuario;
}
async function updateusuarioService(id, usuarioAtualizado) {
    const usuario = await usuarioRepository.findusuarioByIdRepository(id);if (!usuario) {
        throw new Error("usuario não encontrado!");
    }

    const usuarioRetorno = await usuarioRepository.updateusuarioRepository(id, usuarioAtualizado);
    
    if (!usuarioRetorno) {
        throw new Error("Erro ao atualizar o usuario!");
    }

    return usuarioRetorno;
}
async function deleteusuarioService(id) {
    const usuario = await usuarioRepository.findusuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("usuario não encontrado!");
    }

    const mensagemRetorno = await usuarioRepository.deleteusuarioRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar usuario!");
    }

    return mensagemRetorno;
}

export default {
    findAllusuarioService,
    findusuarioByIdService,
    createusuarioService,
    updateusuarioService,
    deleteusuarioService
}

