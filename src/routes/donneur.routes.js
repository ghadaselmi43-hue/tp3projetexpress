import express from "express";

import {
    getAll,
    getById,
    create,
    update,
    remove
} from "../controllers/donneur.controller.js";


import {
    donneurSchema,
    idSchema,
    donneurQuerySchema,
    updateDonneurSchema
} from "../validators/donneur.validator.js";

import { validate }
from "../middlewares/validate.js";

const router = express.Router();

router.get(
    "/",
    validate(donneurQuerySchema, "query"),
    getAll
);

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

router.put(
    "/:id",
    validate(idSchema, "params"),
    validate(donneurSchema, "body"),
    update
);

router.patch(
    "/:id",
    validate(idSchema, "params"),
    validate(updateDonneurSchema, "body"),
    update
);

router.delete(
    "/:id",
    validate(idSchema, "params"),
    remove
);

export default router;