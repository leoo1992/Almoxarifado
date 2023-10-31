'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('carrinho', [
      {
        unidadeProduto: 'Unidade 1',
        quantidadeProduto: 2.5,
        precoProduto: 15.99,
        usuarioId: 1, 
        produtoId: 1, 
      },
      {
        unidadeProduto: 'Unidade 2',
        quantidadeProduto: 3.0,
        precoProduto: 29.99,
        usuarioId: 2, 
        produtoId: 2, 
      },
      {
        unidadeProduto: 'Unidade 3',
        quantidadeProduto: 1.5,
        precoProduto: 12.99,
        usuarioId: 1,
        produtoId: 3,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('carrinho', null, {});
  }
};
