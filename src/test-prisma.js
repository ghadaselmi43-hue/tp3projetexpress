import prisma from "./database/prisma.js";




// 1. Créer un donneur
const donneur = await prisma.donneur.create({
    data: {
        nom: "Khelifi",
        prenom: "Yassine",
        groupeSanguin: "AB+"
    }
});

console.log("Donneur créé :", donneur);


// 2. Modifier un donneur
const donneurModifie = await prisma.donneur.update({
    where: {
        id: 1
    },
    data: {
        nom: "Ben Salem"
    }
});

console.log("Donneur modifié :", donneurModifie);


// 3. Créer deux dons
const nouveauxDons = await prisma.don.createMany({
    data: [
        {
            volume: 450,
            donneurId: 1,
            centreId: 1
        },
        {
            volume: 450,
            donneurId: 1,
            centreId: 2
        }
    ]
});

console.log("Dons créés :", nouveauxDons);


// 4. Rechercher les dons A+ à Sousse
const dons = await prisma.don.findMany({
    where: {
        donneur: {
            groupeSanguin: "A+"
        },
        centre: {
            ville: "Sousse"
        }
    },
    orderBy: {
        dateDon: "desc"
    }
});

console.log("Résultat de la recherche :", dons);

const donsPaginés = await prisma.don.findMany({
    skip: 0,
    take: 10
});

console.log("Résultat de la recherche :", dons);

// 5. Déconnexion
await prisma.$disconnect();