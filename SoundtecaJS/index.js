var app = require('./app');
var mongoose = require('./src/connection/conn');

var port = 4000;
app.listen(port, () => {
    console.log("Servidor corriendo OK");
});