import prisma from "../database/prisma.js";

export function findAll() {
    return prisma.don.findMany({
        include: {
            donneur: true,
            centre: true
        }
    });
}
export function findById(id) {
    return prisma.don.findUnique({
        where: {
            id
        },
        include: {
            donneur: true,
            centre: true
        }
    });
}

export function findByDonneur(donneurId) {
    return prisma.don.findMany({
        where: {
            donneurId
        },
        include: {
            centre: true
        },
        orderBy: {
            dateDon: "desc"
        }
    });
}