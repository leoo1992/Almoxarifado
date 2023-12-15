require("dotenv").config();
const express = require("express");
const sequelize = require("../config/sequelize");
const app = express();
const bodyParser = require('body-parser');
const request = require('supertest');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { veryJWT } = require('../middlewares/auth');
const Usuario = require("../models/usuario");
const seedUsuarios = require("../seeders/20231031194909-usuario");

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
 await sequelize.sync({ force: true });

 const exampleUser = {
  usuario: 'leo@aei.com',
  senha: await bcrypt.hash('leo-1234', saltRounds)
 };

 await Usuario.create(exampleUser);

 app.listen(3000);
});

describe('Testes para Login', () => {
 test('Deve retornar token ao fazer login com credenciais válidas', async () => {
  const response = await request(app)
   .post('/login')
   .send({
    usuario: 'leo@aei.com',
    senha: 'leo-1234'
   });

  expect(response.status).toBe(200);
  expect(response.body.token).toBeDefined();
 }, 10000);

 test('Deve retornar erro ao fazer login com credenciais inválidas', async () => {
  const response = await request(app)
   .post('/login')
   .send({
    usuario: 'usuarioInexistente',
    senha: 'senhaIncorreta',
   });

  expect(response.status).toBe(401);
  expect(response.body.error).toBe('Credenciais inválidas.');
 }, 10000);

 afterAll(async () => {
  await Usuario.destroy({ where: {} });
  await seedUsuarios();
  await sequelize.close();
 });

});
