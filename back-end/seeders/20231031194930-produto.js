'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produto', [
      {
        nome: 'Produto 1',
        unidade: 'Unidade 1',
        quantidade: 10.5,
        preco: 25.99
      },
      {
        nome: 'Produto 2',
        unidade: 'Unidade 2',
        quantidade: 15.2,
        preco: 39.99
      },
      {
        nome: 'Produto 3',
        unidade: 'Unidade 3',
        quantidade: 5.0,
        preco: 12.99
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
