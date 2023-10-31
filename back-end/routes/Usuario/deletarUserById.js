const express = require('express');
const router = express.Router();
const usuarioController = require('../../controllers/usuarioController');

// Rota para deletar usuário por ID
router.delete('/deletaruser/:id', usuarioController.deletarUsuarioPorId);

module.exports = router;
