import axios from "axios";

const obtenerDatos = async () => {
  try {
    const response = await axios.get(
      'https://reqres.in/api/users/2',
      {
        headers: {
          'x-api-key': 'reqres_7f279524a10c4e1a846225cb597f78c0'
        }
      }
    );

    console.log(response.data);

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

obtenerDatos();