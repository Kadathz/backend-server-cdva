// Requires 
var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

// Inicializar variables
var app = express();


// Body Parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


// Importar Rutas

var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/CEDVADB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: Online');

});

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);




// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000 online');
})