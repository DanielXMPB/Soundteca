const { Router } = require('express');
const router = Router();
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerCancion = require('../controllers/ControllerCancion');

router.post('/registrar', ControllerUsuario.registrarUsuario);
router.get('/listarUsuario', ControllerUsuario.listarTodo);
router.get('/listarCancion', ControllerCancion.listarTodo);
router.get('/listarCancion/nombre/:nombre', ControllerCancion.listarPorNombre);
router.get('/listarCancion/album/:album', ControllerCancion.listarPorAlbum);
router.get('/listarCancion/genero/:genero', ControllerCancion.listarPorGenero);
router.get('/listarCancion/artista/:artista', ControllerCancion.listarPorArtista);

module.exports = router;