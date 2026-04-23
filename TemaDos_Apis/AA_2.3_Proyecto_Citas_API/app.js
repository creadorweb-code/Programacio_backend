// IMPORTACIONES (modo ES Modules)
import express from 'express';
import axios from 'axios';

// CREAR APP
const app = express();
const PORT = 3000;

// CONFIGURACIÓN
app.use(express.static('public'));
app.set('view engine', 'ejs');

// RUTA
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');

        const quote = result.data.data.content;
        const character = result.data.data.character.name;

        res.render('index', {
            quote,
            character
        });

        console.log(result.data);

    } catch (error) {
        if (error.response){
            console.log(error.response.data);
        } else{
            console.log('Error:', error.message);
        }

        res.render ('index',{
            quote: "No se pudo obtener una cita en este momento",
            character: "Desconocido"
        })
    }
});

// SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});