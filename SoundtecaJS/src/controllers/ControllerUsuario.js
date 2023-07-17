var mongoose = require('../connection/conn');
var Usuario = require('../models/usuario');
var Cancion = require('../models/cancion')

function login(req, res) {
    var correo = req.body.correo;
    var contrasenna = req.body.contrasenna;
    Usuario.find({ correo: correo, contrasenna: contrasenna }).then((usuario) => {
        res.status(200).json({ message: 'Correcto', status: true, data: usuario });
        console.log("Correcto");
    }).catch(error => {
        res.status(400).json({ message: error, status: false });
        console.log("Error: ", error);
    });
}

function registrarUsuario(req, res) {
    var usuario = new Usuario(req.body);
    usuario.save().then(() => {
        res.status(200).json({ message: 'Correcto', status: true });
        console.log("Correcto");
    }).catch(error => {
        res.status(400).json({ message: error, status: false });
        console.log("Error: ", error);
    });
}

function listarTodo(req, res) {
    Usuario.find({}).then((usuarios) => {
        res.status(200).json({ message: 'Correcto', status: true, data: usuarios });
        console.log("Correcto");
    }).catch(error => {
        res.status(400).json({ message: error, status: false });
        console.log("Error: ", error);
    });
}

function listarPorId(req, res) {
    var _id = req.body._id;
    Usuario.find({ _id: _id }).then((usuario) => {
        res.status(200).json({ message: 'Correcto', status: true, data: usuario });
        console.log("Correcto");
    }).catch(error => {
        res.status(400).json({ message: error, status: false });
        console.log("Error: ", error);
    });
}

function actualizarNombre(req, res) {
    var id_usuario = req.body.id_usuario;
    var nombre = req.body.nombre;
    Usuario.findOneAndUpdate({ _id: id_usuario }, { nombre: nombre }, { new: false })
        .then((usuario) => {
            res.status(200).json({ message: 'Correcto', status: true, data: usuario });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function addFavorites(req, res) {
    var id_usuario = req.body.id_usuario;
    var id_cancion = req.body.id_cancion;
    Usuario.findOneAndUpdate({ _id: id_usuario }, { $push: { favoritos: id_cancion } }, { new: true })
        .then((usuario) => {
            res.status(200).json({ message: 'Correcto', status: true, data: usuario });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function listarFavoritos(req, res) {
    var id_usuario = req.body.id_usuario;
    Usuario.findById({ _id: id_usuario })
        .then((usuario) => {
            const favoritosIds = usuario.favoritos;
            Cancion.find({ _id: { $in: favoritosIds } }).then((canciones) => {
                res.status(200).json({ message: 'Correcto', status: true, data: canciones });
                console.log("Correcto");
            }).catch(error => {
                res.status(400).json({ message: error, status: false });
                console.log("Error: ", error);
            });
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });;
}

function addPlaylist(req, res) {
    var id_usuario = req.body.id_usuario;
    var playlist = req.body.playlist;
    Usuario.findOneAndUpdate({ _id: id_usuario }, { $push: { playlist: playlist } }, { new: true })
        .then((usuario) => {
            res.status(200).json({ message: 'Correcto', status: true, data: usuario });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

function eliminaPlaylist(req, res) {
    var id_usuario = req.body.id_usuario;
    var nombre = req.body.nombre;
    Usuario.updateOne({ _id: id_usuario }, { $pull: { playlist: { nombre: nombre } } })
        .then((usuario) => {
            res.status(200).json({ message: 'Correcto', status: true, data: usuario });
            console.log("Correcto");
        }).catch(error => {
            res.status(400).json({ message: error, status: false });
            console.log("Error: ", error);
        });
}

module.exports = {
    login,
    registrarUsuario,
    listarTodo,
    listarPorId,
    actualizarNombre,
    addFavorites,
    listarFavoritos,
    addPlaylist,
    eliminaPlaylist
}