const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Livro  = sequelize.define('Livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Livro.sync({alter: false, force: false})
    .then(() => console.log('A tabela Livros foi criada'))
    .catch((error) => console.log(error))
    
    module.exports = Livro;