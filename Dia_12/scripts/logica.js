let juego = new Tablero();

let celdas = document.querySelectorAll(".celda");

celdas.forEach((celda) => {
    celda.addEventListener("click", clickCelda);
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

function clickCelda(e) {
    let c = e.currentTarget;
    let posicion = c.getAttribute("data-posicion").split(",");
    let span = c.querySelector("span.material-icons-outlined");
    if (!juego.tablero[posicion[0]][posicion[1]]) {
        if (juego.turno === TURNO.JUGADOR_1) {
            span.textContent = "close";
            span.style.color = document.querySelector("#j1-color").value;
            juego.tablero[posicion[0]][posicion[1]] = OPCIONES.CRUZ;
        } else {
            span.textContent = "circle";
            span.style.color = document.querySelector("#j2-color").value;
            juego.tablero[posicion[0]][posicion[1]] = OPCIONES.CIRCULO;
        }
        let ganador = juego.ganador();
        if (ganador) {
            document.querySelector("#modal-ganador").textContent = ganador;
            document.querySelector("#modal").style.display = "flex";
            switch (ganador) {
                case TURNO.JUGADOR_1:
                    let anterior1 =
                        +document.getElementById("puntuacion-1").textContent;
                    document.getElementById("puntuacion-1").textContent =
                        ++anterior1;
                    document.querySelector("#finger").style.top = "200px";
                    break;
                case TURNO.JUGADOR_2:
                    let anterior2 =
                        +document.getElementById("puntuacion-2").textContent;
                    document.getElementById("puntuacion-2").textContent =
                        ++anterior2;
                    document.querySelector("#finger").style.top = "0";
                    break;
                default:
                    break;
            }
        } else {
            juego.siguienteTurno();
            if (juego.turno === TURNO.JUGADOR_1)
                document.querySelector("#finger").style.top = "0";
            else document.querySelector("#finger").style.top = "200px";
        }
    }
}
