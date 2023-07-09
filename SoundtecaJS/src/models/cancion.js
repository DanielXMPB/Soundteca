const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CancionSchema = Schema({
    nombre: String,
    album: String,
    portada: String,
    genero: [
        String
    ],
    artistas: [
       String
    ]
});

const Cancion = mongoose.model('cancione', CancionSchema);
module.exports = Cancion;