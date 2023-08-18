import express from 'express';
import passportHelper from './helpers/passportHelper.js';
import { crearToken } from './middlewares/mwJWT.js';
import validateRol from './middlewares/mwValidateRol.js';
import routerUsuario from './routes/usuario.routes.js';
import routerCita from './routes/cita.routes.js';
import routerMedico from './routes/medico.routes.js';
import { config } from "dotenv";
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());
app.use(passportHelper.initialize());

const bearerAuth = passportHelper.authenticate('bearer', { session: false })    

app.use('/token/:usuario', crearToken)
app.use('/api/admin/pacientes', bearerAuth, validateRol, routerUsuario)
app.use('/api/admin/cita', bearerAuth, validateRol, routerCita)
app.use('/api/admin/medico', bearerAuth, validateRol, routerMedico)

export default app;