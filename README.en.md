# Inventory Management

A web application for managing inventory and product pickups, with integration to the Mercado Livre API. The system separates the management interface from the API responsible for authentication, data, and inventory operations.

## Stack
- Front end: React 18, React Router, Axios, Bootstrap, and MDB React
- Back end: Node.js, Express, Sequelize, and MySQL
- Authentication: JWT and bcrypt

## Run

Install dependencies in each module.

**Back end**

```bash
cd back-end
npm install
npm start
```

**Front end**

```bash
cd front-end
npm install
npm start
```

Configure the MySQL connection and backend environment variables before starting the services. The front end uses the Create React App development server.

## Backend tests

```bash
cd back-end
npm test
```
