import { z } from "zod";

export const registerSchema = z.object({
    nom: z.string().min(2).regex(/[a-zA-Z]/),
    email: z.string().email(),
    password: z.string().min(8).regex(/[0-9]/),
    role: z.enum([
        "ADMIN",
        "AGENT_CENTRE",
        "RESPONSABLE_STOCK"
    ]).optional()
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1)
});