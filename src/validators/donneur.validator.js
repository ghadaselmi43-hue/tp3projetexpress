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


const donneur = {
    nom: "",
    prenom: "Ahmed",
    groupeSanguin: "XYZ"
};



const resultat = donneurSchema.safeParse(donneur);

if (!resultat.success) {
    console.log(resultat.error.issues);
}

export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});