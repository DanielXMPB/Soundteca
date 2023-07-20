var mongoose = require('../connection/conn');
var Playlist = require('../models/playlist');
var Usuario = require('../models/usuario');
var Cancion = require('../models/cancion')

function listarPlaylist(req, res) {
    var _id = req.body._id;
    Usuario.findById({ _id: _id })
        .then((usuario) => {
            const playlist = usuario.playlist;
            Playlist.find({ _id: { $in: playlist } }).then((playlist) => {
                res.status(200).json({ message: 'Correcto', status: true, data: playlist });
                console.log("Correcto");
            }).catch(error => {
                res.status(400).json({ message: error, status: false });
                console.log("Error: ", error);
            });
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function addPlaylist(req, res) {
    var id_usuario = req.body.id_usuario;
    var playlist = new Playlist(req.body.playlist);
    playlist.save().then((playlist) => {
        Usuario.findOneAndUpdate({ _id: id_usuario }, { $push: { playlist: playlist._id.toString() } }, { new: true })
            .then((usuario) => {
                res.status(200).json({ message: 'Correcto', status: true, data: usuario });
                console.log("Correcto");
            }).catch(error => {
                res.status(400).json({ message: error, status: false });
                console.log("Error: ", error);
            });
    }).catch(error => {
        res.status(400).json({ message: error, status: false });
        console.log("Error: ", error);
    });
}

function eliminaPlaylist(req, res) {
    var id_usuario = req.body.id_usuario;
    var id_playlist = req.body.id_playlist;
    Usuario.updateOne({ _id: id_usuario }, { $pull: { playlist: id_playlist } })
        .then(() => {
            Playlist.findByIdAndRemove(id_playlist).then((playlist) => {
                res.status(200).json({ message: 'Correcto', status: true, data: playlist });
                console.log("Correcto");
            }).catch(error => {
                res.status(400).json({ message: error, status: false });
                console.log("Error: ", error);
            });
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function agregarEnPlaylist(req, res) {
    var id_playlist = req.body.id_playlist;
    var id_cancion = req.body.id_cancion
    Playlist.updateOne({ _id: id_playlist }, { $push: { canciones: id_cancion } })
        .then((playlist) => {
            res.status(200).json({ message: 'Correcto', status: true, data: playlist });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function eliminarEnPlaylist(req, res) {
    var id_playlist = req.body.id_playlist;
    var id_cancion = req.body.id_cancion
    Playlist.findOneAndUpdate({ _id: id_playlist }, { $pull: { canciones: id_cancion } }, { new: true })
        .then((playlist) => {
            res.status(200).json({ message: 'Correcto', status: true, data: playlist });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function listsarCancionesPlaylist(req, res) {
    var id_playlist = req.body.id_playlist;
    Playlist.findById({ _id: id_playlist })
        .then((playlist) => {
            const canciones = playlist.canciones;
            Cancion.find({ _id: { $in: canciones } }).then((canciones) => {
                res.status(200).json({ message: 'Correcto', status: true, data: canciones });
                console.log("Correcto");
            }).catch(error => {
                res.status(400).json({ message: error, status: false });
                console.log("Error: ", error);
            });
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

module.exports = {
    listarPlaylist,
    addPlaylist,
    eliminaPlaylist,
    agregarEnPlaylist,
    eliminarEnPlaylist,
    listsarCancionesPlaylist
}