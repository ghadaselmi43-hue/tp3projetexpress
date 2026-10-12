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

export function getAll() {
    return donneurs;
}

export function getById(id) {
    return donneurs.find(
        donneur => donneur.id === id
    );
}