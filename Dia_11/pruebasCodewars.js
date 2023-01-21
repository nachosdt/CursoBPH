/* let cadena = "Hola mundo, qué tal estás?";

let regex = /[a-z]/gi;

let result = cadena.(regex);
console.log(result); */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    cumplirAños() {
        this.edad++;
    }
}

/* let persona = new Persona("Juan", 25);
persona.cumplirAños();
console.log(persona.edad);

class Operaciones {
    static sumar(a, b) {
        return a + b;
    }
    static restar(a, b) {
        return a - b;
    }
}

let resultado = Operaciones.sumar(5, 10); */

/* function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing")); */

let cadena = "Hola mundo, qué tal estás, ANTONIO?";
let arr = cadena.split("");
/* arr.forEach(function (e, i, a) {
    console.log("Indice", i + " " + e);
    console.log(a);
}); */

let vocales = arr.filter(function (e) {
    return e.match(/[aeiou]/gi);
});
console.log(vocales);
