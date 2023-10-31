const Carrinho = require("../models/carrinho");

// Operação Create (criar um item no carrinho)
exports.createCarrinhoItem = async (req, res) => {
  try {
    const { unidadeProduto, quantidadeProduto, precoProduto, usuarioId, produtoId } = req.body;
    const carrinhoItem = await Carrinho.create({
      unidadeProduto,
      quantidadeProduto,
      precoProduto,
      usuarioId,
      produtoId,
    });
    res.status(201).json(carrinhoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar item no carrinho" });
  }
};

// Operação Read (recuperar itens do carrinho de um usuário)
exports.getCarrinhoItens = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const carrinhoItens = await Carrinho.findAll({
      where: { usuarioId },
    });
    res.json(carrinhoItens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao recuperar itens do carrinho" });
  }
};

// Operação Update (atualizar um item no carrinho)
exports.updateCarrinhoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { unidadeProduto, quantidadeProduto, precoProduto } = req.body;
    const updatedCarrinhoItem = await Carrinho.update(
      {
        unidadeProduto,
        quantidadeProduto,
        precoProduto,
      },
      {
        where: { id },
      }
    );
    res.json(updatedCarrinhoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar item no carrinho" });
  }
};

// Operação Delete (remover um item do carrinho)
exports.deleteCarrinhoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCarrinhoItem = await Carrinho.destroy({
      where: { id },
    });
    res.json(deletedCarrinhoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover item do carrinho" });
  }
};
