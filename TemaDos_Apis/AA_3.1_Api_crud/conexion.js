import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// 🔍 Verificar si se está leyendo el .env
console.log("ENV:", process.env.URI);

// Tomar la URI desde .env
const uri = process.env.URI;

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("❌ Error al conectar a la base de datos:", error);
  });