const sequelize = require('../config/bd');

const Usuario = require('./usuario');
const Livro = require('./livro');

Usuario.hasMany(Livro, {
    foreignKey: 'usuarioId',
    as: 'livros'
});

Livro.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    as: 'usuario'
});

module.exports = {
    sequelize,
    Usuario,
    Livro
};