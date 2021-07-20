const {Sequelize} = require('sequelize');

  const sequilize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASWORD,
   {
     host: process.env.DB_HOST,
     dialect: 'mysql',
     timezone:'-03:00',
   }
);

module.exports = Sequelize;