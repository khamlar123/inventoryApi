'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('import_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      import_id: {
        type: Sequelize.INTEGER
      },
      equip_id: {
        type: Sequelize.INTEGER
      },
      equip_qty: {
        type: Sequelize.INTEGER
      },
      import_date: {
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
    await queryInterface.dropTable('import_details');
  }
};