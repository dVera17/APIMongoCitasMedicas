import { Router } from "express";
import limiter from "../limiter/rateLimit.js";
import { usuarioController } from "../controllers/usuario.controller.js";
const router = Router();

router
    .get('/', limiter(), usuarioController.getPacientes)
    .get('/proxima_cita/:dni', limiter(), usuarioController.getProximaCita)
    .get('/medico/:med_matri', limiter(), usuarioController.getPacitentesMismoDoctor)
    .get('/consultoria/:dni', limiter(), usuarioController.getConsultorias)

export default router;