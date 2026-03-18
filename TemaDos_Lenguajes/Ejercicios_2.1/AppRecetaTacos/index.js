// a. Importar dependencias
import express from 'express';
import bodyParser from 'body-parser';

// b. Crear instancia de express
const app = express();

// c. Configurar puerto
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// d. Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});