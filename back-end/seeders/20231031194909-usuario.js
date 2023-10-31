'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
      {
        email: 'usuario1@example.com',
        senha: 'senha1'
      },
      {
        email: 'usuario2@example.com',
        senha: 'senha2'
      },
      {
        email: 'usuario3@example.com',
        senha: 'senha3'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};

