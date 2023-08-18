import rateLimit from "express-rate-limit";
const limiter = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 10,
        standardHeaders: true,
        legacyHeaders: false,
        message: (req, res) => {
            res.status(429).send({ status: 429, message: "Limite alcanzado" });
        }
    })
}

export default limiter;