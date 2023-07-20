const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaylistSchema = Schema({
    nombre: String,
    canciones: [],
    portada: String
}, {
    timetamps:true,
    versionKey:false
});

const Playlist = mongoose.model('playlist', PlaylistSchema);
module.exports = Playlist;