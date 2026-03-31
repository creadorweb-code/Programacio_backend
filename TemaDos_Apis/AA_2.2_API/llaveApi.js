

import axios from "axios";

const API_KEY = "9828ccd0c9e2c8ad2fb112caeb833163"; // pega tu clave aquí

const obtenerClima = async () => {
    try {
        const respuesta = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=${API_KEY}&units=metric&lang=es`
        );

        console.log("Clima en Cancún:");
        console.log(respuesta.data);

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

obtenerClima();