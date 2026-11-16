export function authorize(...allowedRoles) {
    return (req, res, next) => {

        // Vérifier si l'utilisateur est authentifié
        if (!req.user) {
            return res.status(401).json({
                message: "Authentification requise"
            });
        }

        // Vérifier le rôle de l'utilisateur
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Accès interdit : rôle insuffisant"
            });
        }

        // Autoriser l'accès
        next();
    };
}