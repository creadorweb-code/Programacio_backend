
// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: Hugo

/* a. Integrar la información de cada ejercicio en comentarios */
// Cada ejercicio está documentado con comentarios en el código.

/* b. Declaración de todos los diferentes tipos de datos */

let numero = 42;                  // Number
let texto = "Hola Mundo";         // String
let booleano = true;              // Boolean
let indefinido;                   // Undefined
let nulo = null;                  // Null
let objeto = { nombre: "Hugo Sanchez" };  // Object

console.log(numero, texto, booleano, indefinido, nulo, objeto);

/* c. Crear un arreglo con al menos cinco elementos de diferentes tipos */

let arreglo = [123, "cadena", false, { curso: "NodeJS" }, null];
console.log(arreglo);

/* d. Función polinómica de segundo grado */
function polinomio(x) {
  return (x ** 2) + (2 * x) + 1; // Ejemplo: x^2 + 2x + 1
}
console.log("Polinomio(3):", polinomio(3));

/* e. Función flecha con manipulación de cadenas */
const manipularCadena = (str) => str.toUpperCase();
console.log(manipularCadena("hola node"));

/* f. Bucle descendente del 10 al 1 */
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/* g. Objeto de institución */
let institucion = {
  nombre: "Universidad X",
  ciudad: "Felipe Carrillo Puerto",
  estudiantes: 1200
};

/* h. Método en el objeto */
institucion.descripcion = function() {
  return `${this.nombre} ubicada en ${this.ciudad} con ${this.estudiantes} estudiantes.`;
};
console.log(institucion.descripcion());

/* i. Módulo matemático (archivo separado recomendado) */
// En index.js simulamos su uso:
const matematicas = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b
};
console.log("Suma:", matematicas.suma(5, 3));
console.log("Resta:", matematicas.resta(5, 3));

/* j. Función asincrónica con setTimeout y callback */
function operacionAsincrona(callback) {
  setTimeout(() => {
    callback("Operación completada después de 2 segundos");
  }, 2000);
}
operacionAsincrona((resultado) => console.log(resultado));

/* k. Conversión de cadena a número con manejo de errores */
try {
  let cadena = "123";
  let numeroConvertido = Number(cadena);
  if (isNaN(numeroConvertido)) throw new Error("No es un número válido");
  console.log("Número convertido:", numeroConvertido);
} catch (error) {
  console.error("Error:", error.message);
}
