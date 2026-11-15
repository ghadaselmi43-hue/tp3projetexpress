import { z } from "zod";

export const donneurSchema = z.object({
    nom: z.string().min(2),
    prenom: z.string().min(2),
    groupeSanguin: z.enum([
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
    ])
});

export const donneurQuerySchema = z.object({
    nom: z.string().optional(),
    prenom: z.string().optional(),
    groupeSanguin: z.enum([
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
    ]).optional()
});


/*
const resultat = donneurSchema.safeParse(donneur);

if (!resultat.success) {
    console.log(resultat.error.issues);
}

export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});
*/


export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});

export const updateDonneurSchema = z.object({
    nom: z.string().min(1).optional(),
    prenom: z.string().min(1).optional(),
    email: z.string().email().optional()
});