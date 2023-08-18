import conn from "../db/connection.js";
import ErrorHandler from "../storage/ErrorHandler.js";
const db = await conn();
let especialidad = db.collection("especialidad");
let medico = db.collection("medico");


const getDoctorEspecialidad = async (req, res) => {
    try {
        let especialidadEncontrada = await especialidad.findOne({ nombre: req.params.especialidad });
        if (!especialidadEncontrada) return res.status(404).send("La especialidad no existe");
        let medicoEspecialidad = await medico.find({ id_especialidad: especialidadEncontrada.id }).toArray();
        res.send(medicoEspecialidad);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const medicoController = {
    getDoctorEspecialidad
}