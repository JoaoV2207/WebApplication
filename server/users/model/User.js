
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Product = require('../../products/model/Product');

const User = sequelize.define('Users',{
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  role:{
      type: DataTypes.ENUM,
      values: ['funcionario', 'user'],
      allowNull: false,
  }
});

User.hasMany(Product, {
  onDelete: 'cascade',
});
Product.belongsTo(User);

User.sync({alter: false, force: false})
    .then(() => console.log('A tabela user foi criada'))
    .catch((error) => console.log(error))

Product.sync({alter: false, force: false})
    .then(() => console.log('A tabela Products foi criada'))
    .catch((error) => console.log(error)) 
    
module.exports = User;