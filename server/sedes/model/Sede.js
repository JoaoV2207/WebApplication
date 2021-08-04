const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Sede  = sequelize.define('Sedes', {
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

Sede.sync({alter: false, force: false})
    .then(() => console.log('A tabela Sedes foi criada'))
    .catch((error) => console.log(error))
    
    module.exports = Sede;


