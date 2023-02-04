function cierraModal() {
    document.getElementById("modal").style.display = "none";
    let spans = document.querySelectorAll(
        ".celda > span.material-icons-outlined"
    );
    spans.forEach((span) => {
        span.textContent = "";
    });
    juego.reiniciar();
}
