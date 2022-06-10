'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      bod: {
        type: Sequelize.DATE
      },
      village: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      contact_info: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffs');
  }
};