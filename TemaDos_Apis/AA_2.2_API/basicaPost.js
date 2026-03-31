import axios from "axios";

const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post(
            'https://reqres.in/api/register',
            {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            },
            {
                headers: {
                    'x-api-key': 'reqres_7f279524a10c4e1a846225cb597f78c0'
                }
            }
        );

        console.log('Registro exitoso:', respuesta.data);

    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
};

registrarUsuario();