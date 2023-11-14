"use strict";
const { DataTypes } = require("sequelize"),
  sequelize = require("../config/sequelize");

const usuario = sequelize.define(
  "usuario",
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
    createdAt: false,
    updatedAt: false
  }
);

module.exports = usuario;
