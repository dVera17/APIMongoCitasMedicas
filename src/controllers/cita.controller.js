import conn from "../db/connection.js";
import ErrorHandler from "../storage/ErrorHandler.js";
const db = await conn();
let cita = db.collection("cita");

const getCitas = async (req, res) => {
    try {
        let result = await cita.find({}).sort({ fecha: 1 }).toArray();
        res.send(result);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const citaController = {
    getCitas
}