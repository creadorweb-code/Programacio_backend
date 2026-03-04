import express from 'express';

const app = express();
const port = 3000;

// Ruta GET inicial
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
    res.sendStatus(200);
});

// Método POST - Registro
app.post('/registro', (req, res) => {
     res.sendStatus(201);
});

// Método PUT - Actualizar usuario
app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
});


// Método PATCH - Modificar usuario
app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200)
});

// Método DELETE - Eliminar usuario
app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});