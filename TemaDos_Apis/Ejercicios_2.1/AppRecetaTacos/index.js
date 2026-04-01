// a) Importar dependencias 
import express from "express";
import bodyParser from "body-parser";

// a) Cadena JSON (copiada de tu archivo recetaTacos.json)
import fs from 'fs';

const recetasTacos = JSON.parse(
  fs.readFileSync('./recetaTacos.json', 'utf-8')
);

// Crear app
const app = express();
const PORT = 3000;

// c) Servir archivos estáticos (HTML y CSS)
app.use(express.static("public"));

// e) Middleware para JSON
app.use(bodyParser.json());

// f) Endpoint dinámico
app.get("/receta/:type", (req, res) => {

  const elegirTaco = recetasTacos.find(
    r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
  );

  res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});