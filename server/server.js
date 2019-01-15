require('./config/server');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario');
})


app.post('/usuario', function(req, res) {

    let body = req.body;
    res.json({
        body
    });


})


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ', process.env.PORT);
})