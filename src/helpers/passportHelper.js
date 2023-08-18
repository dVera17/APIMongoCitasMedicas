import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { validarToken } from "../middlewares/mwJWT.js";

passport.use(new BearerStrategy(
    async function (token, done) {
        const cliente = await validarToken(token)
        if (!cliente) return done(null, false);
        return done(null, cliente); // El token es válido y se agrega el documento de la colección token a req.user
    }
));
export default passport;