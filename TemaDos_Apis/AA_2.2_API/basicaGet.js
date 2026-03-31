import axios from "axios";

const obtenerUsuario = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        'x-api-key': 'reqres_7f279524a10c4e1a846225cb597f78s0'
      }
    });

    console.log('Datos del usuario:', response.data);

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

obtenerUsuario();