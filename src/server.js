import express from "express";

const app = express();
const PORT = 3000;

const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    },
    {
        id: 3,
        nom: "Mansouri",
        prenom: "Amine",
        groupeSanguin: "B+"
    }
    
    
];




app.get("/", (req, res) => {
    res.send("Bienvenue dans SangConnect");
});


app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        service: "SangConnect"
    });
});

app.use(express.json());

app.post("/api/donneurs", (req, res) => {

    const donneur = {
        id: donneurs.length + 1,
        nom: req.body.nom,
        prenom: req.body.prenom,
        groupeSanguin: req.body.groupeSanguin
    };

    donneurs.push(donneur);

    res.status(201).json(donneur);
});
app.get("/api/donneurs", (req, res) => {
    res.json(donneurs);
});

app.get("/api/donneurs/:id", (req, res) => {
    const id = Number(req.params.id);

    const donneur = donneurs.find(d => d.id === id);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
});

  app.get("/api/donneurs/", (req, res) => {

    const groupe = req.query.groupeSanguin;

    if (!groupe) {
        return res.json(donneurs);
    }

    const resultat = donneurs.filter(
        donneur => donneur.groupeSanguin === groupe
    );

    res.json(resultat);
});

app.put("/api/donneurs/:id", (req, res) => {

    const id = Number(req.params.id);

    const donneur = donneurs.find(
        donneur => donneur.id === id
    );

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    donneur.nom = req.body.nom;
    donneur.prenom = req.body.prenom;
    donneur.groupeSanguin = req.body.groupeSanguin;

    res.json(donneur);
});

app.patch("/api/donneurs/:id", (req, res) => {

    const id = Number(req.params.id);

    const donneur = donneurs.find(
        donneur => donneur.id === id
    );

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    if (req.body.nom !== undefined) {
        donneur.nom = req.body.nom;
    }

    if (req.body.prenom !== undefined) {
        donneur.prenom = req.body.prenom;
    }

    if (req.body.groupeSanguin !== undefined) {
        donneur.groupeSanguin = req.body.groupeSanguin;
    }

    res.json(donneur);
});

app.delete("/api/donneurs/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = donneurs.findIndex(
        donneur => donneur.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    donneurs.splice(index, 1);

    res.status(204).send();
});

import express from "express";

import donneurRoutes from "./routes/donneur.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API SangConnect"
    });
});

app.use("/api/donneurs", donneurRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});




