import { Router } from "express";
import limiter from "../limiter/rateLimit.js";
import { usuarioController } from "../controllers/usuario.controller.js";
const router = Router();

router
    .get('/', usuarioController.getPacientes)

export default router;