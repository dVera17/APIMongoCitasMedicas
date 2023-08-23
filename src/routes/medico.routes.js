import { Router } from "express";
import limiter from "../limiter/rateLimit.js";
import { medicoController } from "../controllers/medico.controller.js";
const router = Router();

router
    .get('/:especialidad', limiter(), medicoController.getDoctorEspecialidad)
    .get('/data/consultorios', limiter(), medicoController.getDoctoresyConsultorios)

export default router;