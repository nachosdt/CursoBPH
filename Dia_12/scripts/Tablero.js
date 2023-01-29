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
