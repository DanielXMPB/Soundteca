const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsurioSchema = Schema({
    nombre: String,
    correo: String,
    contrasenna: String,
    playlist: [],
    favoritos: []
}, {
    timetamps:true,
    versionKey:false
});

const Usuario = mongoose.model('usuario', UsurioSchema);
module.exports = Usuario;