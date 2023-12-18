const bcrypt = require('bcrypt');
const Users = require('../models/usuario');

// Função de controle para o cadastro de usuários
exports.cadastrarUsuario = async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    if (!senha || !usuario) {
      throw new Error('Todos os campos são obrigatórios.');
    }

    const existingUser = await Users.findOne({ where: { usuario: usuario } });
    if (existingUser) {
      throw new Error('Usuário já cadastrado.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const createdUser = await Users.create({
      usuario: usuario,
      senha: hashedPassword
    });

    res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
  } catch (err) {

    res.status(400).json({ error: 'Erro ao inserir os dados' });
  }
};


// Função de controle para deletar usuário por ID
exports.deletarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const userExistente = await Users.findByPk(id);

    await userExistente.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir registro.' });
  }
};
