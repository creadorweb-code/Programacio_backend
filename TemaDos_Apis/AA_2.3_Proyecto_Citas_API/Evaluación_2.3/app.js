import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const palabras = [
    { key: "algorithm", categoria: "Programación" },
    { key: "database", categoria: "Bases de datos" },
    { key: "network", categoria: "Redes" },
    { key: "server", categoria: "Infraestructura" },
    { key: "protocol", categoria: "Redes" },
    { key: "encryption", categoria: "Seguridad" },
    { key: "compiler", categoria: "Programación" }
];

const traducciones = {
    algorithm: "Algoritmo",
    database: "Base de datos",
    network: "Red",
    server: "Servidor",
    protocol: "Protocolo",
    encryption: "Encriptación",
    compiler: "Compilador"
};

app.get("/", async (req, res) => {
    try {
        const random = palabras[Math.floor(Math.random() * palabras.length)];

        const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${random.key}`
        );

        const definicionEN = response.data[0].meanings[0].definitions[0].definition;
        const ejemplo = response.data[0].meanings[0].definitions[0].example || "Sin ejemplo disponible";

        const traduccion = await axios.get(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(definicionEN)}&langpair=en|es`
        );

        const ejemploTrad = await axios.get(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(ejemplo)}&langpair=en|es`
        );

        res.render("index", {
            palabra: traducciones[random.key],
            categoria: random.categoria,
            definicion: traduccion.data.responseData.translatedText,
            ejemplo: ejemploTrad.data.responseData.translatedText
        });

    } catch (error) {
        res.render("index", {
            palabra: "Error",
            categoria: "-",
            definicion: "No se pudo cargar la información",
            ejemplo: "-"
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});