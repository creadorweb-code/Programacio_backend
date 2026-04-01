import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// 6. Variable global
var nombreEquipo = "";

// Middleware
function registrador(req, res, next) {
  console.log(req.body); // Muestra los datos enviados por el usuario
  nombreEquipo = req.body["mascota"] + " " + req.body["adjetivo"]; // Concatena datos
  next(); // 5. Llama al siguiente middleware
}

app.use(bodyParser.urlencoded({ extended: true }));

// 7. Usar el middleware
app.use(registrador);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("Nombre del equipo: " + nombreEquipo);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
