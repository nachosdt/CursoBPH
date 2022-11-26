console.log("Hola, mundo!");

// DECLARACIÓN DE VARIABLES
// 1) var
var nombre1 = 1;
// 2) let
let nombre2 = "valor2";
// 3) const
const CONSTANTE = true;

// TIPOS DE DATO EN JAVASCRIPT

// TIPOS DE DATO PRIMITIVOS
// 1) null
let tipoNull = null;
// 2) undefined
let tipoUndefined = undefined;
// 3) boolean
let tipoBoolean = true;
tipoBoolean = false;
// 4) number
let tipoNumber = 1;
tipoNumber = 1.1045987654321;
// 5) string
let tipoString = "Hola, mundo!";
tipoString = "";
// 6) bigint
let tipoBigInt = 1234567890123456789012345678901234567890n;
tipoBigInt = 1n;
// 7) symbol
let tipoSymbol = Symbol("Hola, mundo!");

// TIPOS DE DATO NO PRIMITIVOS
// 1) object
let tipoObject = { nombre: "Juan", edad: 20 };
tipoObject = {};
// 2) function
let tipoFunction = function () {
    return 1;
};

// OPERADORES
console.log("\nOPERADORES\n");
let x = 11;
let y = 3;
let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y; // resto de la división
console.log(modulo);

// Operador incremento y decremento
let numero = 1;
numero++; // numero = numero + 1;
console.log("Numero incrementado con ++", numero);
numero--; // numero = numero - 1;
console.log("Numero decrementado con --", numero);
numero += 5; // numero = numero + 5;
console.log("Numero incrementado con +=", numero);

let palabra1 = "Hola";
let palabra2 = "Mundo";
let concatenacion = palabra1 + " " + palabra2;
console.log(concatenacion);
concatenacion = palabra1 + " " + x;
console.log(concatenacion);

// ESTRUCTURAS DE CONTROL
console.log("\nESTRUCTURAS DE CONTROL\n");
// 1) if
x = 30;
if (x > 10) {
    console.log("BLOQUE IF - x es mayor que 10");
} else {
    console.log("BLOQUE IF - x es menor o igual que 10");
}
// 2) switch
switch (x) {
    case 10:
        console.log("BLOQUE SWITCH - x es igual a 10");
        break;
    case 20:
        console.log("BLOQUE SWITCH - x es igual a 20");
        break;
    case 30:
        console.log("BLOQUE SWITCH - x es igual a 30");
        break;
    default:
        console.log("BLOQUE SWITCH - x no es igual a 10 ni a 20");
}
// 3) bucle for
for (let i = 0; i < 10; i += 2) {
    console.log("BLOQUE FOR - i = " + i);
}
