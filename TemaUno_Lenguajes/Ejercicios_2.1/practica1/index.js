import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal (formulario)
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

// Procesar formulario + API
app.post("/submit", async (req, res) => {
  const { adjetivo, mascota } = req.body;

  // Consumir API de usuarios
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // Crear lista de nombres y correos
  let lista = "";
  users.forEach(user => {
    lista += `<li>${user.name} - ${user.email}</li>`;
  });

  // Respuesta HTML
  res.send(`
    <h1>Equipo: ${adjetivo} ${mascota}</h1>
    <h2>Usuarios:</h2>
    <ul>${lista}</ul>
    <a href="/">Volver</a>
  `);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});