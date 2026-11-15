import * as donneurService
    from "../services/donneur.service.js";

export async function getAll(req, res, next) {

    try {

        const donneurs =
            await donneurService.getAll();

        res.json(donneurs);

    } catch (error) {

        next(error);
    }
}
export async function create(req, res, next) {

    try {

        const donneur =
            await donneurService.create(req.body);

        res.status(201).json(donneur);

    } catch (error) {

        next(error);
    }
}
export async function remove(req, res, next) {

    try {

        const id = Number(req.params.id);

        await donneurService.remove(id);

        res.status(204).send();

    } catch (error) {

        next(error);
    }
}
export async function getById(req, res) {
    try {
        const donneur = await donneurService.getById(req.params.id);

        res.json(donneur);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export async function update(req, res) {
    try {
        const donneur = await donneurService.update(
            Number(req.params.id),
            req.body
        );

        res.json(donneur);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}