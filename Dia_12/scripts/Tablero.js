class Tablero {
    constructor() {
        this.tablero = [
            new Array(3).fill(OPCIONES.VACIO),
            new Array(3).fill(OPCIONES.VACIO),
            new Array(3).fill(OPCIONES.VACIO),
        ];

        this.turno = TURNO.JUGADOR_1;
    }

    fila(indice) {
        if (indice < 3 && indice >= 0) return this.tablero[indice];
        else throw new Error("Indice fuera de rango");
    }

    columna(indice) {
        if (indice < 3 && indice >= 0) {
            return this.tablero.map((fila) => {
                return fila[indice];
            });
        } else throw new Error("Indice fuera de rango");
    }

    diagonal(indice) {
        if (indice === "primera") {
            return this.tablero.map((fila, i) => fila[i]);
        } else if (indice === "segunda") {
            return this.tablero.map((fila, i) => fila[2 - i]);
        } else throw new Error("Indice fuera de rango");
    }

    siguienteTurno() {
        if (this.turno === TURNO.JUGADOR_1) {
            this.turno = TURNO.JUGADOR_2;
        } else {
            this.turno = TURNO.JUGADOR_1;
        }
    }

    ganador() {
        let ganador = null;
        let filas = this.tablero;
        let columnas = [0, 1, 2].map((i) => this.columna(i));
        let diagonales = ["primera", "segunda"].map((i) => this.diagonal(i));

        let lineas = [...filas, ...columnas, ...diagonales];

        lineas.forEach((linea) => {
            if (linea.every((celda) => celda === OPCIONES.CRUZ)) {
                ganador = TURNO.JUGADOR_1;
            } else if (linea.every((celda) => celda === OPCIONES.CIRCULO)) {
                ganador = TURNO.JUGADOR_2;
            }
        });

        return ganador;
    }

    reiniciar() {
        let ganador = this.ganador();
        this.tablero = [
            new Array(3).fill(OPCIONES.VACIO),
            new Array(3).fill(OPCIONES.VACIO),
            new Array(3).fill(OPCIONES.VACIO),
        ];
        this.turno =
            ganador === TURNO.JUGADOR_1 ? TURNO.JUGADOR_2 : TURNO.JUGADOR_1;
    }
}

const OPCIONES = {
    CRUZ: "X",
    CIRCULO: "O",
    VACIO: null,
};

const TURNO = {
    JUGADOR_1: "JUGADOR_1",
    JUGADOR_2: "JUGADOR_2",
};
