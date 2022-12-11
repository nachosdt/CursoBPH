class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    imprimeNombre() {
        console.log(`Me llamo ${this.nombre} ${this.apellido}`);
    }
}

module.exports = Persona;
