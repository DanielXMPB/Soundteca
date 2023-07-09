var mongoose = require('../Connection/conn');
var Usuario = require('../models/usuario');

function registrarUsuario(req,res) {
    var usuario = new Usuario(req.body);
    usuario.save().then( ()=> {
        res.status(200).json({ message: 'Correcto', status: true});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}

function listarTodo(req,res) {
    Usuario.find({}).then( (usuarios)=> {
        res.status(200).json({ message: 'Correcto', status: true, data: usuarios});
        console.log("Correcto");
    }).catch( error => {
        res.status(400).json({message: error, status: false});
        console.log("Error: ", error);
    });
}



module.exports = {
    registrarUsuario,
    listarTodo
}