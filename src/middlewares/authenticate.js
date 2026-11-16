import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {

    try {

        const header =
            req.headers.authorization;

        if (!header) {
            const error =
                new Error("Token manquant");

            error.statusCode = 401;

            throw error;
        }

        const [type, token] =
            header.split(" ");

        if (type !== "Bearer" || !token) {
            const error =
                new Error("Format du token invalide");

            error.statusCode = 401;

            throw error;
        }

        const payload =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.user = payload;

        next();

    } catch (error) {

        if (!error.statusCode) {
            error.statusCode = 401;
        }

        next(error);
    }
}