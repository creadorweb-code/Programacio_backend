cdimport express from "express";

const app = express();
const port = 3000;

// Ruta principal (Raíz)
app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a mi Página Web</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Acerca de</h1>");
});

// 🔹 Nuevo endpoint: Carrera
app.get("/carrera", (req, res) => {
  res.send("<h1>Carrera: Ingeniería en Sistemas Computacionales</h1>");
});

// 🔹 Nuevo endpoint: Materia
app.get("/materia", (req, res) => {
  res.send("<h1>Materia: Programación BackEnd</h1>");
});

// Manejo de errores 404 (Para cualquier ruta no definida)
app.use("/", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

// Puesta en marcha del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});