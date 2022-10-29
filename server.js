const path = require("path");
//El anterior codigo crea un servidor web utilizando express.js y body -parh
//path se utiliza para trabajar con direcroios rutas
//Express.js es un marco web que facilita la creaccion de appweb y API's
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    //la respuesta a enviar es la suma de a y b,parseeados a entero
    res.send({
        result: parseInt(a) + parseInt(b)
    });
    console.log(result)
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});