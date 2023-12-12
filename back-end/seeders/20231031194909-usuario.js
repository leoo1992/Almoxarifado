const sequelize = require("../config/sequelize");
const Usuario = require("../models/usuario");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const seedUsuarios = async () => {
  try {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await Usuario.sync();

    const usuarioData = [
      {
        usuario: 'leo@leo.com',
        senha: await bcrypt.hash('leo-1234', saltRounds)
      },
      {
        usuario: 'admin@admin.com',
        senha: await bcrypt.hash('adm-1234', saltRounds)
      },
      {
        usuario: 'master@master.com',
        senha: await bcrypt.hash('mas-1234', saltRounds)
      }
    ];

    await Usuario.bulkCreate(usuarioData);
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    console.log("Dados de Usuario alimentados com sucesso.");

  } catch (err) {
    console.error("Erro ao inserir dados de Usuario:", err);
    console.log("Erro detalhado:", err);
  }
};

module.exports = seedUsuarios;
