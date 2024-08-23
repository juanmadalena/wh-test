const express = require('express');
// const model = require('./database/model');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.post('/', (req, res) => {
    const { body } = req;
    console.log('event', body);
    // model({ body: req.body }).save();
    res.send('Petición POST');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});