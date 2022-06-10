'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cate_id: {
        type: Sequelize.INTEGER
      },
      unit_id: {
        type: Sequelize.INTEGER
      },
      equip_name: {
        type: Sequelize.STRING
      },
      equip_stock: {
        type: Sequelize.INTEGER
      },
      equip_import: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('equipments');
  }
};