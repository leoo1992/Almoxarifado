const express = require('express');
const router = express.Router();
const carrinhoController = require('../../controllers/carrinhoController');

// Adicionar item ao carrinho (POST)
router.post('/criar-carrinho', carrinhoController.createCarrinhoItem);
router.get('/carrinho/:usuarioId', carrinhoController.getCarrinhoItens);
router.put('/atualizar-item-no-carrinho/:id', carrinhoController.updateCarrinhoItem);
router.delete('/remover-do-carrinho/:id', carrinhoController.deleteCarrinhoItem);

module.exports = router;
