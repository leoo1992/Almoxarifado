require("dotenv").config();
const express = require("express");
const sequelize = require("./config/sequelize");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { veryJWT } = require('./middlewares/auth');
const seedUsuarios = require ("./seeders/20231031194909-usuario");

app.use(bodyParser.json());

//IMPORTS AUTH
const loginRouter = require("./routes/Auth/login");

//IMPORTS USUARIO
const cadastroUserRouter = require("./routes/Usuario/cadastrosUsuario");
const deletarUserByIdRouter = require("./routes/Usuario/deletarUserById");

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

sequelize.authenticate();
sequelize.sync({ force: true }).then(async () => {
    const seeder = require('./seeders/20231031194909-usuario');
    await seedUsuarios();
    app.listen(port);
    console.log('Servidor rodando na porta ' + port);
});

//ROTA AUTH
app.use("/", loginRouter);

//ROTAS USUARIO
app.use("/", cadastroUserRouter);
app.use("/", veryJWT, deletarUserByIdRouter);

module.exports = app;
