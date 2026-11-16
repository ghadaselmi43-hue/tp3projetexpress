import argon2 from "argon2";

export async function hashPassword(password) {
    return argon2.hash(password);
}

export async function verifyPassword(hash, password) {
    return argon2.verify(hash, password);
}

const hash = await hashPassword("MotDePasse123");

const correct = await verifyPassword(
    hash,
    "MotDePasse123"
);

const incorrect = await verifyPassword(
    hash,

    "AutreMotDePasse"
);

console.log(correct);
console.log(incorrect);
