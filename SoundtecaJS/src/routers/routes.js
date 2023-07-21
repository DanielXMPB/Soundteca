const { Router } = require('express');
const router = Router();
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerCancion = require('../controllers/ControllerCancion');
var ControllerPlaylist = require('../controllers/ControllerPlaylist')

router.get('/listarCancion', ControllerCancion.listarTodo);
router.get('/listarCancion/nombre/:nombre', ControllerCancion.listarPorNombre);
router.get('/listarCancion/album/:album', ControllerCancion.listarPorAlbum);
router.get('/listarCancion/genero/:genero', ControllerCancion.listarPorGenero);
router.get('/listarCancion/artista/:artista', ControllerCancion.listarPorArtista);

router.post('/login', ControllerUsuario.login);
router.post('/registrar', ControllerUsuario.registrarUsuario);
router.get('/listarUsuario', ControllerUsuario.listarTodo);
router.post('/listarPorId', ControllerUsuario.listarPorId);
router.put('/actualizarNombre', ControllerUsuario.actualizarNombre);
router.put('/actualizarCorreo', ControllerUsuario.actualizarCorreo);
router.put('/addFavoritos', ControllerUsuario.addFavorites);
router.put('/removeFavorite', ControllerUsuario.removeFavorite);
router.post('/listarFavoritos', ControllerUsuario.listarFavoritos);

router.put('/addPlaylist', ControllerPlaylist.addPlaylist);
router.put('/eliminaPlaylist', ControllerPlaylist.eliminaPlaylist);
router.post('/listarPlaylist', ControllerPlaylist.listarPlaylist);
router.post('/agregarEnPlaylist', ControllerPlaylist.agregarEnPlaylist);
router.put('/eliminarEnPlaylist', ControllerPlaylist.eliminarEnPlaylist);
router.post('/listsarCancionesPlaylist', ControllerPlaylist.listsarCancionesPlaylist);

module.exports = router;