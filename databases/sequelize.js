const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
  host: process.env.HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
