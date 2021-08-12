const sequelize = require ('../../database');
const {DataType, DataTypes} = require ('sequelize');

const Product = sequelize.define('Products', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

});

module.exports = Product;