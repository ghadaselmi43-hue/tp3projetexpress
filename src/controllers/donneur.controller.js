import * as donneurService from "../services/donneur.service.js";


export function getAll(req, res, next) {
    try {
        const donneurs = donneurService.getAll();
        res.json(donneurs);
    } catch (error) {
        next(error);
    }
}

export function getById(req, res, next) {
    try {
        const id = req.params.id;
        const donneur = donneurService.getById(id);

        if (!donneur) {
            const error = new Error("Donneur introuvable");
            error.statusCode = 404;
            throw error;
        }

        res.json(donneur);
    } catch (error) {
        next(error);
    }
}

export function create(req, res, next) {
    try {
        const donneur = donneurService.create(req.body);

        res.status(201).json({
            message: "Donneur créé avec succès",
            donneur
        });
    } catch (error) {
        next(error);
    }
}