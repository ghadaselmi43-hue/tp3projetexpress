import express from "express";

import {
    getAll,
    getById,
    create
} from "../controllers/donneur.controller.js";

import { validate } from "../middlewares/validate.js";
import {
    donneurSchema,
    idSchema
} from "../validators/donneur.validator.js";

const router = express.Router();


router.get("/", getAll);


router.get(
    "/:id",
    validate(idSchema, "params"),
    getById
);


router.post(
    "/",
    validate(donneurSchema, "body"),
    create
);

export default router;