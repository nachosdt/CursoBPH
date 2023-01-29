let tablero = new Tablero();

let celdas = document.querySelectorAll(".celda");

celdas.forEach((celda) => {
    celda.addEventListener("click", (e) => {
        let c = e.target;
        let span = c.querySelector("span.material-icons-outlined");
        if (tablero.turno === TURNO.JUGADOR_1) {
            span.textContent = "close";
            span.style.color = document.querySelector("#j1-color").value;
        } else {
            span.textContent = "circle";
            span.style.color = document.querySelector("#j2-color").value;
        }
        tablero.siguienteTurno();
    });
});

let colores = document.querySelectorAll("input[type='color']");
colores.forEach((color) => {
    color.addEventListener("change", (e) => {
        // Cambiar color del h2
        let input = e.target;
        let abuelo = input.parentElement.parentElement;
        let h2 = abuelo.firstElementChild;
        h2.style.color = input.value;

        let spans = document.querySelectorAll("span.material-icons-outlined");
        //Cambiar color de las celdas
        if (input.id === "j1-color") {
            spans.forEach((span) => {
                if (span.textContent === "close")
                    span.style.color = input.value;
            });
        } else {
            spans.forEach((span) => {
                if (span.textContent === "circle")
                    span.style.color = input.value;
            });
        }
    });
});
