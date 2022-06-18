//const express = require('express'); //CommonJS
import express from 'express'; //ES6


//crear la app
const app = express();

//routing
app.get('/', (req, res) => { 
    res.send('Hola mundo');
});

app.get('/usuario', (req, res) => { 
    res.send('Hola usuario');
});

//definir el puerto y arracanar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Server esta corriendo en el puerto ${port}`);
});
