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