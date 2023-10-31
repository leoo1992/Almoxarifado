"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const produto = require("./produto");
const usuario = require("./usuario");

const carrinho = sequelize.define(
    "carrinho",
    {
        idCarrinho: {
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        unidadeProduto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantidadeProduto: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0.00,
        },
        precoProduto: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0.00,
        },
    },
    {
        tableName: "carrinho",
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    }
);

carrinho.belongsTo(usuario, {
    foreignKey: 'usuarioId',
    allowNull: false,
    onDelete: "CASCADE",
});

carrinho.belongsTo(produto, {
    through: "CarrinhoProduto",
    foreignKey: 'produtoId',
    allowNull: false,
    onDelete: "CASCADE",
});

module.exports = carrinho;


