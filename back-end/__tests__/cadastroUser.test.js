require("dotenv").config();
const express = require("express");
const sequelize = require("../config/sequelize");
const app = express();
const bodyParser = require('body-parser');
const request = require('supertest');
const { veryJWT } = require('../middlewares/auth');
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
app.use("/", veryJWT, deletarUserByIdRouter);

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  await Usuario.destroy({ where: {} });
  app.listen(3000);
});

describe('Testes para Cadastro de Usuário', () => {


  //1. Cadastra um usuário
  test('Deve cadastrar um usuário com sucesso', async () => {
    const response = await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: 'eoo@leo.com',
        senha: 'lei-1234',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Cadastro realizado com sucesso.');
  }, 10000);


  //2. Cadastra um usuário que já existe
  test('Deve retornar erro ao tentar cadastrar um usuário que já existe', async () => {
    await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: 'eio@leo.com',
        senha: 'lei-1234',
      });

    const response = await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: 'eio@leo.com',
        senha: 'lei-1234',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Erro ao inserir os dados');

  }, 10000);


  //3. Cadastra um usuário sem parâmetros obrigatórios
  test('Deve retornar erro ao tentar cadastrar um usuário sem parâmetros obrigatórios', async () => {
    const response = await request(app)
      .post('/cadastrousuarios')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Erro ao inserir os dados');
  }, 10000);


  //4. Cadastra um usuário faltando parâmetros
  test('Deve retornar erro ao tentar cadastrar um usuário faltando parâmetros senha', async () => {
    const response = await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: 'usuario_teste',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Erro ao inserir os dados');
  }, 10000);


  //5. Cadastra um usuário faltando parâmetros
  test('Deve retornar erro ao tentar cadastrar um usuário faltando parâmetros usuario', async () => {
    const response = await request(app)
      .post('/cadastrousuarios')
      .send({
        usuario: '',
        senha: 'usu-1234',
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Erro ao inserir os dados');
  }, 10000);

  afterAll(async () => {
    await Usuario.destroy({ where: {} });
  });

});