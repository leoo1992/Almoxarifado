"use strict";
const { DataTypes } = require("sequelize"),
    sequelize = require("../config/sequelize");

const produto = sequelize.define(
    "Pessoa",
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0.00,
        },
        preco: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0.00,
        },
    },
    {
        tableName: "produto",
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = produto;
