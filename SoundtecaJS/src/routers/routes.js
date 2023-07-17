const { Router } = require('express');
const router = Router();
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerCancion = require('../controllers/ControllerCancion');

router.get('/listarCancion', ControllerCancion.listarTodo);
router.get('/listarCancion/nombre/:nombre', ControllerCancion.listarPorNombre);
router.get('/listarCancion/album/:album', ControllerCancion.listarPorAlbum);
router.get('/listarCancion/genero/:genero', ControllerCancion.listarPorGenero);
router.get('/listarCancion/artista/:artista', ControllerCancion.listarPorArtista);
router.post('/registrar', ControllerUsuario.registrarUsuario);
router.get('/listarUsuario', ControllerUsuario.listarTodo);
router.post('/login', ControllerUsuario.login);
router.put('/addFavoritos', ControllerUsuario.addFavorites);
router.put('/addPlaylist', ControllerUsuario.addPlaylist);
router.post('/listarPorId', ControllerUsuario.listarPorId);
router.put('/eliminaPlaylist', ControllerUsuario.eliminaPlaylist);
router.put('/actualizarNombre', ControllerUsuario.actualizarNombre);
router.post('/listarFavoritos', ControllerUsuario.listarFavoritos);

module.exports = router;