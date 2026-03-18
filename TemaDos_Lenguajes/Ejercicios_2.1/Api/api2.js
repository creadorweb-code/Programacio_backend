// Función general para consultar cualquier recurso
async function obtenerDatos(url, nombre) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("==== " + nombre + " ====");
    console.log(data);
  } catch (error) {
    console.error("Error en " + nombre + ":", error);
  }
}

// Llamadas a todos los recursos
obtenerDatos("https://jsonplaceholder.typicode.com/posts", "POSTS");
obtenerDatos("https://jsonplaceholder.typicode.com/comments", "COMMENTS");
obtenerDatos("https://jsonplaceholder.typicode.com/albums", "ALBUMS");
obtenerDatos("https://jsonplaceholder.typicode.com/photos", "PHOTOS");
obtenerDatos("https://jsonplaceholder.typicode.com/todos", "TODOS");
obtenerDatos("https://jsonplaceholder.typicode.com/users", "USERS");