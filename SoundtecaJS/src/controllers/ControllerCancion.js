var mongoose = require('../connection/conn');
var Cancion = require('../models/cancion');

function listarTodo(req,res) {
    Cancion.find({}).then( (canciones)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: canciones});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

function listarPorNombre(req,res) {
    var nombre = req.params.nombre;
    Cancion.find({nombre: new RegExp('.*' + nombre + '.*')}).then( (canciones)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: canciones});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

function listarPorAlbum(req,res) {
    var album = req.params.album;
    Cancion.find({album: new RegExp('.*' + album + '.*')}).then( (canciones)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: canciones});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

function listarPorGenero(req,res) {
    var genero = req.params.genero;
    Cancion.find({genero: {$all: [new RegExp('.*' + genero + '.*')]}}).then( (canciones)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: canciones});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

function listarPorArtista(req,res) {
    var artista = req.params.artista;
    Cancion.find({artistas: {$all: [new RegExp('.*' + artista + '.*')]}}).then( (canciones)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: canciones});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

module.exports = {
    listarTodo,
    listarPorNombre,
    listarPorAlbum,
    listarPorGenero,
    listarPorArtista
}