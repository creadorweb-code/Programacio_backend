import axios from "axios";

const ejecutar = async () => {
  try {
    // LOGIN
    const login = await axios.post(
      "https://dummyjson.com/user/login",
      {
        username: "emilys",
        password: "emilyspass"
      }
    );

    const token = login.data.accessToken;

    // PETICIÓN PROTEGIDA
    const user = await axios.get(
      "https://dummyjson.com/user/me",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("👤 Usuario:", user.data);

  } catch (error) {
    console.log("❌ ERROR:", error.response?.data || error.message);
  }
};

ejecutar();