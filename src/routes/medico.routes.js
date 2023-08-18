import { Router } from "express";
import limiter from "../limiter/rateLimit.js";
import { medicoController } from "../controllers/medico.router.js";
const router = Router();

router
    .get('/:especialidad', limiter(), medicoController.getDoctorEspecialidad)

export default router;