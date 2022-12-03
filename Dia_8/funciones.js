// Funciones

// Dos formas de declarar funciones
// 1) function

miFuncion();
function miFuncion() {
    console.log("Texto escrito desde miFuncion");
}

// 2) function expression
let miFuncion2 = function () {
    console.log("Texto escrito desde miFuncion2");
};
miFuncion2();

// Funciones con parámetros
function suma(x, y) {
    return x + y;
}
let resultado = suma(1, 2);
console.log("Resultado de la suma de numeros:", resultado);
resultado = suma("Hola", " Mundo");
console.log("Resultado de la suma de palabras:", resultado);
resultado = suma(1, " Mundo");
console.log("Resultado de la suma de numero y palabra:", resultado);
resultado = suma("Hola", false);
console.log("Resultado de la suma de palabra y booleano:", resultado);
resultado = suma(1, [12, 43]);
console.log("Resultado de la suma de numero y array:", resultado);
resultado = suma(1, { nombre: "Pepe" });
console.log("Resultado de la suma de numero y objeto:", resultado);
resultado = suma(3);
console.log(resultado);

function devuelveObjeto(primerParametro, segundoParametro) {
    return {
        propiedad_1: primerParametro,
        propiedad_2: segundoParametro,
    };
}

let resultado2 = devuelveObjeto(1, 2);
console.log(
    "Propiedades del objeto devuelto:",
    resultado2.propiedad_1,
    resultado2.propiedad_2
);

resultado2 = devuelveObjeto("Hola", { nombre: "Pepe", edad: 23 });
console.log(resultado2.propiedad_2.nombre);

// Funciones y objetos
let objeto = {
    nombre: "Pepe",
    edad: 23,
    cumplirAnios: function () {
        objeto.edad++;
    },
};

console.log(objeto.nombre + " tiene " + objeto.edad + " años");
objeto.cumplirAnios();
console.log("Después de cumplir años:");
console.log(objeto.nombre + " tiene " + objeto.edad + " años");
