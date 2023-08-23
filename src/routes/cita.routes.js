import { Router } from "express";
import limiter from "../limiter/rateLimit.js";
import { citaController } from "../controllers/cita.controller.js";
const router = Router();

router
    .get('/', limiter(), citaController.getCitas)
    .get('/total_citas/:cod_medico/:fecha', limiter(), citaController.getCitas)

export default router;