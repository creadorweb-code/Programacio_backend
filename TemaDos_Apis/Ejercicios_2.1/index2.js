// Cadena JSON
const jsonString = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Convertir a objeto
const objeto = JSON.parse(jsonString);

console.log(objeto);
console.log(objeto.nombre);