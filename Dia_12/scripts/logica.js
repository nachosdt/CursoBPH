let tablero = new Tablero();

let celdas = document.querySelectorAll(".celda");
celdas.forEach((celda) => {
    celda.addEventListener("click", (e) => {
        let c = e.target;
        if (tablero.turno === TURNO.JUGADOR_1) {
            c.querySelector("span.material-icons-outlined").textContent =
                "close";
        } else {
            c.querySelector("span.material-icons-outlined").textContent =
                "circle";
        }
        tablero.siguienteTurno();
    });
});
