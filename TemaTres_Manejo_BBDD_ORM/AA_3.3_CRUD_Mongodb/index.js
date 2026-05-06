import express from 'express';
import { conectar, getDB } from './conexion.js';
import { ObjectId } from 'mongodb';

const app = express();
const puerto = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.send('API CRUD con driver oficial de MongoDB');
});

// GET - Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const db = getDB();
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

// GET - Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const db = getDB();
        const usuario = await db.collection('usuarios').findOne({
            _id: new ObjectId(req.params.id)
        });

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
});

// POST - Crear un nuevo usuario

app.post('/usuarios', async (req, res) => {
    try {
        const db = getDB();
        const { nombre, edad, correo } = req.body;

        // Validación manual (lo que antes hacía el schema de Mongoose)
        if (!nombre || !edad || !correo) {
            return res.status(400).json({ error: "nombre, edad y correo son obligatorios" });
        }

        const nuevoUsuario = {
            nombre,
            edad,
            correo,
            creadoEn: new Date()
        };

        const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);
        res.status(201).json({ insertedId: resultado.insertedId, ...nuevoUsuario });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

// PUT - Actualizar usuario por ID
app.put('/usuarios/:id', async (req, res) => {
    try {
        const db = getDB();
        const { nombre, edad, correo } = req.body;

        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { nombre, edad, correo } }
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({ mensaje: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
});

// DELETE - Eliminar usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const db = getDB();
        const resultado = await db.collection('usuarios').deleteOne({
            _id: new ObjectId(req.params.id)
        });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
});


conectar()
    .then(() => {
        app.listen(puerto, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
        });
    })
    .catch((error) => {
        console.error("❌ No se pudo iniciar el servidor:", error);
        process.exit(1);
    });
