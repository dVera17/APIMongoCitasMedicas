import express from 'express';
import passportHelper from './helpers/passportHelper.js';
import { crearToken } from './middlewares/mwJWT.js';
import validateRol from './middlewares/mwValidateRol.js';
import routerUsuario from './routes/usuario.routes.js';
import { config } from "dotenv";
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());
app.use(passportHelper.initialize());

app.use('/token/:usuario', crearToken)
app.use('/api/admin', routerUsuario)
app.use('/api/vendedor', validateRol, (req, res) => { res.send(`In vendedor`) })

export default app;