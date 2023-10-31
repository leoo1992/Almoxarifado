const Produto = require('../models/produto');

// Listar todos os produtos
const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

// Buscar um produto por ID
const buscarProdutoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};

// Criar um novo produto
const criarProduto = async (req, res) => {
  const { nome, unidade, quantidade, preco } = req.body;

  try {
    const produto = await Produto.create({ nome, unidade, quantidade, preco });
    res.status(201).json(produto);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

// Atualizar um produto por ID
const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, unidade, quantidade, preco } = req.body;

  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.update({ nome, unidade, quantidade, preco });
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

// Excluir um produto por ID
const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.destroy();
      res.json({ message: 'Produto excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  excluirProduto,
};
