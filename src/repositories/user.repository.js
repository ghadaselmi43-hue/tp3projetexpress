import prisma from "../database/prisma.js";

export function findByEmail(email) {
    return prisma.user.findUnique({
        where: {
            email
        }
    });
}

export function findById(id) {
    return prisma.user.findUnique({
        where: {
            id
        }
    });
}

export function create(data) {
    return prisma.user.create({
        data
    });
}

export function findAll() {
    return prisma.user.findMany({
        select: {
            id: true,
            nom: true,
            email: true,
            role: true
        }
    });
}