'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('outequipment_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      out_id: {
        type: Sequelize.INTEGER
      },
      equip_id: {
        type: Sequelize.INTEGER
      },
      out_qty: {
        type: Sequelize.INTEGER
      },
      out_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('outequipment_details');
  }
};