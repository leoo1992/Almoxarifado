const bcrypt = require('bcrypt');
const Users = require('../models/usuario');

// Função de controle para o cadastro de usuários
exports.cadastrarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const createdUser = await Users.create({
      email,
      senha: hashedPassword,
    });

    res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
  } catch (err) {
    console.error('Erro ao inserir os dados: ', err);
    res.status(500).json({ error: 'Erro ao realizar o cadastro.', err });
  }
};

// Função de controle para deletar usuário por ID
exports.deletarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const userExistente = await Users.findByPk(id);

    if (!userExistente) {
      return res.status(404).json({ error: 'Registro não encontrado.' });
    }

    await userExistente.destroy();
    res.status(204).send();
  } catch (err) {
    console.error('Erro ao excluir registro: ', err);
    res.status(500).json({ error: 'Erro ao excluir registro.' });
  }
};