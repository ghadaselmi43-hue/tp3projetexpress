

const donneur = {
    nom: "Ben Ali",
    prenom: "Ahmed",
    groupeSanguin: "A+"
};

const resultat = donneurSchema.safeParse(donneur);

console.log(resultat.success);