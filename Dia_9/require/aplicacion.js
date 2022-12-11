// Importación de las librerías que necesitamos
let { suma, resta, multiplicacion, division } = require("./libreria1");
let Persona = require("./libreria2");
let instancia = require("./libreria3");

console.log("Uso de funciones importadas con require():");
console.log(suma(2, 3));
console.log(resta(2, 3));
console.log(multiplicacion(2, 3));
console.log(division(2, 3));

console.log("\nUso de la clase Persona importada con require():");
let objetoPersona = new Persona("Juan", "Perez");
objetoPersona.imprimeNombre();

console.log(
    "\nUso de la instancia de la clase OtraClase importada con require():"
);
console.log(instancia.propiedad);
