import * as donService
    from "../services/don.service.js";

export async function getAll(req, res, next) {
    try {
        const dons = await donService.getAll();

        res.json(dons);
    } catch (error) {
        next(error);
    }
}

export async function getById(req, res, next) {
    try {
        const id = Number(req.params.id);

        const don = await donService.getById(id);

        res.json(don);
    } catch (error) {
        next(error);
    }
}