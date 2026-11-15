/*
const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    }
];

let prochainId = 3;

export function getAll() {
    return donneurs;
}

export function getById(id) {
    return donneurs.find(
        donneur => donneur.id === Number(id)
    );
}

export function create(donneur) {
    const nouveauDonneur = {
        id: prochainId++,
        ...donneur
    };

    donneurs.push(nouveauDonneur);

    return nouveauDonneur;
}
    */

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