import express from 'express';
import "./conexion.js";
import Usuario from './models/usuario.model.js';

const app = express();
const puerto = 3000;

//  Middlewares (IMPORTANTE para Postman)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

//Ruta POST para crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});


// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});