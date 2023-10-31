"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Produto = require("./produto");
const Usuario = require("./usuario");

const Carrinho = sequelize.define(
    "Carrinho",
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

Carrinho.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    allowNull: false,
    onDelete: "CASCADE",
});

Carrinho.belongsTo(Produto, {
    through: "CarrinhoProduto",
    foreignKey: 'produtoId',
    allowNull: false,
    onDelete: "CASCADE",
});

module.exports = Carrinho;


