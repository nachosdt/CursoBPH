console.log("Mensaje en consola desde el navegador");
console.log("Ancho de la ventana: " + window.innerWidth);

let boton = document.getElementById("miBoton");
let titulo = document.getElementById("miTitulo");

boton.addEventListener("click", () => {
    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);
    titulo.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
});

window.onload = function () {
    alert("La página ha cargado");
};
