const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.post('/', (req, res) => {
    console.log('event', req.body);
    res.send('Petición POST');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});