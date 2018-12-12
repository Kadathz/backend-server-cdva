// Requires 
var express = require('express');

var mongoose = require('mongoose');


// Inicializar variables
var app = express();


// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/CEDVADB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: Online');

});

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({

        ok: true,
        mensaje: 'Petición realiazda correctamente'
    });

});

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000 online');
})