// Falsy values in JavaScript

let falsy1 = false;
let falsy2 = 0;
let falsy3 = "";
let falsy4 = null;
let falsy5 = undefined;
let falsy6 = NaN;

if (falsy1 && falsy2 && falsy3 && falsy4 && falsy5 && falsy6) {
    console.log("Some value is truthy");
} else {
    console.log("All values are falsy");
}

function numeroEntreUnoYCien(numero) {
    if (numero >= 1 && numero <= 100) {
        return true;
    } else {
        return false;
    }
}

if (numeroEntreUnoYCien(45)) {
    console.log("El número está entre 1 y 100");
} else {
    console.log("El número no está entre 1 y 100");
}
