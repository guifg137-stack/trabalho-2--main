import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL,
        senha  TEXT NOT NULL,
        foto text
    )    
`);

function findAllusuarioRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM usuario`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}
function findusuarioByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT
                *
            FROM usuario
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    });
}


function createusuarioRepository(novousuario) {
    return new Promise((resolve, reject) => {
        
        const {
            id,
            login,
            email,
            senha,
            foto
        } = novousuario;

        db.run(
            `INSERT INTO usuario( login, email, senha, foto)
            VALUES (?,?,?,?)`,
            [login, email,senha,foto],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID
                    });
                }
            }
        );

    });
}function updateusuarioRepository(id, usuario) {
    return new Promise((resolve, reject) => {
        const {
            login,
            email,
            senha,
            foto
        } = usuario;

        db.run(
            `UPDATE usuario
            SET login = ?,
                email = ?,
                senha = ?,
                foto = ?
            WHERE id = ?`,
            [login, email, senha, foto, id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...usuario
                    });
                }
            }
        )
    });
}

         function deleteusuarioRepository(id) {
    return new Promise((resolve, reject) => {
            db.run(
                `DELETE FROM usuario
                WHERE id = ?`,
                [id],
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({
                            message: "Usuario excluído com sucesso."
                        });
                    }
                }
            );
        }

    );
}


export default {
    findAllusuarioRepository,
    findusuarioByIdRepository,
    createusuarioRepository,
    updateusuarioRepository,
    deleteusuarioRepository
}
