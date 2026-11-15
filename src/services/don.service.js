import * as donRepository
    from "../repositories/don.repository.js";

export async function getAll() {
    return donRepository.findAll();
}

export async function getById(id) {
    const don = await donRepository.findById(id);

    if (!don) {
        const error = new Error("Don introuvable");
        error.statusCode = 404;
        throw error;
    }

    return don;
}
export async function getByDonneur(donneurId) {
    return donRepository.findByDonneur(donneurId);
}