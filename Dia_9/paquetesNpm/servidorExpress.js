// Instalación de paquetes NPM:
// $ npm install <nombre_paquete>

// Importamos las librerías que necesitamos
const express = require("express");

const app = express();

// Definimos el puerto
const port = 3000;

// Definimos las rutas
app.get("/saludo", (req, res) => {
    res.send("Hola Mundo!");
});

app.get("/saludo/:nombre", (req, res) => {
    res.send(`Hola ${req.params.nombre}!`);
});

app.get("/despedida", (req, res) => {
    res.send("Adios!");
});

app.get("/saludoHtml", (req, res) => {
    res.sendFile(`${__dirname}/recursosHtml/saludo.html`);
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor Express a la escucha en el puerto ${port}`);
});
