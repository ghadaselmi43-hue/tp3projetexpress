import * as authService
    from "../services/auth.service.js";
    import { login as loginService } from "../services/auth.service.js";

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const result = await loginService(email, password);

        return res.status(200).json(result);

    } catch (error) {
        if (error.message === "Email ou mot de passe incorrect") {
            return res.status(401).json({
                message: error.message
            });
        }

        console.error(error);

        return res.status(500).json({
            message: "Erreur interne du serveur"
        });
    }
}

export async function register(req, res, next) {

    try {

        const user =
            await authService.register(req.body);

        res.status(201).json({
            id: user.id,
            nom: user.nom,
            email: user.email,
            role: user.role
        });

    } catch (error) {

        next(error);
    }
}

export async function getAll(req, res, next) {
    try {
        const users = await authService.getAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}
