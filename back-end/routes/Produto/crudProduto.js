const express = require('express');
const router = express.Router();
const produtoController = require('../../controllers/produtoController');

router.get('/listar-produto', produtoController.listarProdutos);
router.get('/buscar-produto/:id', produtoController.buscarProdutoPorId);
router.post('/criar-produto', produtoController.criarProduto);
router.put('/atualizar-produto/:id', produtoController.atualizarProduto);
router.delete('/excluir-produto/:id', produtoController.excluirProduto);

module.exports = router;