const Sequelize = require('sequelize');
const config = new Sequelize('goals', 'Chris', 'password', {dialect: 'mysql'});

module.exports = config;