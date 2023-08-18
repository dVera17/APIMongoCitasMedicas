import conn from "../db/connection.js";
import ErrorHandler from "../storage/ErrorHandler.js";
const db = await conn();
let usuario = db.collection("usuario");

const getPacientes = async (req, res) => {
    try {
        let result = await usuario.find({}).toArray();
        res.send(result);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const usuarioController = {
    getPacientes
}