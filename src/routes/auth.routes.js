import express from "express";

import {
    register,
    login,
    getAll
} from "../controllers/auth.controller.js";

import { validate } from "../middlewares/validate.js";
import {
    registerSchema,
    loginSchema
} from "../validators/auth.validator.js";

import { authorize } from "../middlewares/authorize.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.post(
    "/register",
    validate(registerSchema, "body"),
    register
);

router.post(
    "/login",
    validate(loginSchema, "body"),
    login
);

router.get(
    "/admin",
    authenticate,
    authorize("ADMIN"),
    getAll
);

router.get(
    "/stock",
    authenticate,
    authorize(
        "ADMIN",
        "RESPONSABLE_STOCK"
    ),
    getAll
);
export default router;