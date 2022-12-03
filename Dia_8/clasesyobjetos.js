// Clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
}

let persona1 = new Persona("Juan", 20); // = {nombre: "Juan", edad: 20}
let persona2 = new Persona("Pepe", 23); // = {nombre: "Pepe", edad: 23}
let nombre = persona1.nombre;
let edad = persona1.edad;
console.log("La variable persona1 tiene de nombre:", nombre);
console.log("La variable persona1 tiene una edad de:", edad);
console.log(persona1);
persona1.saludar();

// Clases de JS
let array = new Array(); // = []
array = [1, 2, 3];
array.length;
array.push(4);
console.log("Array después de push():", array);

let fecha = new Date();
console.log("Fecha actual:", fecha);
console.log("Año actual:", fecha.getFullYear());
fecha.setFullYear(2020);
console.log("Fecha después de setFullYear():", fecha);
