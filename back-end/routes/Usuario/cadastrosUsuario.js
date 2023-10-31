const express = require('express');
const router = express.Router();
const usuarioController = require('../../controllers/usuarioController');

// Rota para cadastro de usuários
router.post('/cadastrousuarios', usuarioController.cadastrarUsuario);

module.exports = router;
