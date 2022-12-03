// Arrays

let array = [1, 2, 3, 4, 5];
array = [1, 2, 3, "cuatro", false];
array = [];
array = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]];
array = [1, 2, 3, 4, 5];

let primerElemento = array[0];
console.log(primerElemento);
let ultimoElemento = array[4];
console.log(ultimoElemento);

let longitud = array.length;
console.log("Longitud del array:", longitud);

console.log("Recorrer todos los elementos de un array:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let inexistente = array[36457];
console.log("Valor del elemento con índice 5:", inexistente);

// Comparación entre objetos y arrays
let objeto = {};
objeto = {
    nombre: "Pepe",
    propiedad2: false,
    terceraPropiedad: 1,
};
console.log(objeto.nombre);
console.log(objeto["nombre"]);
// Acceso a una propiedad inexistente
console.log("Acceso a una propiedad inexistente:", objeto.propiedadInexistente);
//Añadir propiedades a un objeto
objeto.nuevaPropiedad = "Hola, mundo!";
console.log(objeto.nuevaPropiedad);

let objetoArray = {
    0: 1,
    1: 2,
    2: false,
    3: "Hola, mundo!",
};
console.log(
    "Primer elemento del objeto con estructura de array:",
    objetoArray[0]
);
