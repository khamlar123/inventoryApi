
const { Sequelize } = require("sequelize")

const db = new Sequelize("equipment", "root", "", {
    host: '127.0.0.1',
    dialect: "mysql"
  });

  module.exports = db;