# Almoxarifado

Aplicação web para controle de estoque e retirada de produtos, com consulta à API do Mercado Livre. O sistema separa a interface de gerenciamento e a API responsável por autenticação, dados e operações do inventário.

## Stack
- Front-end: React 18, React Router, Axios, Bootstrap e MDB React
- Back-end: Node.js, Express, Sequelize e MySQL
- Autenticação: JWT e bcrypt

## Como executar

Instale as dependências em cada módulo.

**Back-end**

```bash
cd back-end
npm install
npm start
```

**Front-end**

```bash
cd front-end
npm install
npm start
```

Configure a conexão MySQL e as variáveis de ambiente do backend antes de iniciar os serviços. O front-end usa o servidor de desenvolvimento do Create React App.

## Testes do backend

```bash
cd back-end
npm test
```
