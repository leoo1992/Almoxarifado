require("dotenv").config();
const express = require("express");
const sequelize = require("../config/sequelize");
const app = express();
const bodyParser = require('body-parser');
const request = require('supertest');
const Usuario = require("../models/usuario");

app.use(bodyParser.json());

//IMPORTS AUTH
const loginRouter = require("../routes/Auth/login");

//IMPORTS USUARIO
const cadastroUserRouter = require("../routes/Usuario/cadastrosUsuario");
const deletarUserByIdRouter = require("../routes/Usuario/deletarUserById");

app.use(express.json());
app.use(express.static('public'));

app.use("/", loginRouter);
app.use("/", cadastroUserRouter);
app.use("/", deletarUserByIdRouter);

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync();
});

describe('Testes para Deleção de Usuário', () => {


  // Teste para deletar um usuário pelo id
  test('Deve deletar um usuário pelo id com sucesso', async () => {

    const response1 = await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: 'tes@tes.com',
        senha: 'leo-1234',
      });

    const usuarioCriado = await Usuario.findOne({
      where: { usuario: 'tes@tes.com' },
    });
    
    const userId = usuarioCriado.id;

    const response = await request(app)
      .delete(`/deletaruser/${userId}`)
      .expect(204);
    expect(response.status).toBe(204);
    const userDeleted = await Usuario.findByPk(userId);
    expect(userDeleted).toBeNull();

  }, 10000);


  // Teste para verificar se um erro é retornado ao tentar deletar um usuário que não existe
  test('Deve retornar erro ao deletar um usuário que não existe', async () => {
    const userId = 999999;
    const response = await request(app)
      .delete(`/deletaruser/${userId}`)
      .expect(500);

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Erro ao excluir registro.');

  }, 10000);


  // Teste para verificar se um erro é retornado ao tentar deletar um usuário sem fornecer o ID
  test('Deve retornar erro ao tentar deletar um usuário sem fornecer o ID', async () => {
    const response = await request(app)
      .delete('/deletaruser')
      .expect(404);

    expect(response.status).toBe(404);
  }, 10000);


  afterAll(async () => {
    await Usuario.destroy({ where: {} });
  });

});