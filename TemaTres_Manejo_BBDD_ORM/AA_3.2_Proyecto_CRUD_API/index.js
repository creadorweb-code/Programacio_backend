import express from 'express';
import "./conexion.js";
import Usuario from './models/usuario.model.js';

const app = express();
const puerto = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// Ruta POST para crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});
 
// Ruta PUT ACTUALIZAS USUARIO POR ID

app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
});

// Ruta DELETE para eliminar usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await Usuario.findByIdAndDelete(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar:", error);
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
});

//NUEVA RUTA: Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

 //(GET por ID)
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params; //rctraemos el id de los parametros de la solcitud

        const usuario = await Usuario.findById(id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(usuario);

    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
});



// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});