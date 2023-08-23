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

const getCantitadCitasDia = async (req, res) => {
    try {
        const fechaEspecifica = ISODate(req.params.fecha);
        let result = await cita.aggregate([
            {
                $match: {
                    cod_matriProfesional_med: parseInt(req.params.cod_medico),
                    $expr: {
                        $eq: [
                            { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } },
                            { $dateToString: { format: "%Y-%m-%d", date: fechaEspecifica } }
                        ]
                    }
                }
            },
            {
                $group: {
                    id: "$cod_matriProfesional_med",
                    count: { $sum: 1 }
                }
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const citaController = {
    getCitas,
    getCantitadCitasDia
}