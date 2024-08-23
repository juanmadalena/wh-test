const express = require('express');

const app = express();

app.use(express.text({ type: 'application/json' }));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.post('/', (req, res) => {
    const { body } = req;
    console.log('event', body);
    // model({ body: req.body }).save();
    res.send('Petición POST');
});

app.post('/events', (req, res) => {
    const { body } = req;
    console.log('body:', body);
    // model({ body: req.body }).save();
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});