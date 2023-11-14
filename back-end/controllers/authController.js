require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

// Função de controle para a rota de login
exports.login = async (req, res) => {
  const { usuario, senha } = req.body;
  if (!usuario || !senha) {
    return res.status(400).json({ error: "Usuário e senha são obrigatórios." });
  }
  try {
    const usuarioDoBanco = await Usuario.findOne({
      where: {
        usuario,
      },
    });

    if (!usuario) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }
    const isPasswordValid = await bcrypt.compare(senha, usuarioDoBanco.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    const token = jwt.sign({ userId: usuarioDoBanco.id }, process.env.JWT_SECRET, {
      expiresIn: 3600 // 1 h
      //expiresIn: 1800 // 30 min
      //expiresIn: 900 // 15 min
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("Erro ao fazer login: ", err);
    res.status(500).json({ error: "Erro ao fazer login." });
  }
};