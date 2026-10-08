const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Livro = sequelize.define('Livro', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },

    status: {
        type: DataTypes.STRING,
        defaultValue: 'PENDENTE'
    },

    localizacao: {
        type: DataTypes.STRING,
        allowNull: true
    },

    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Livro;