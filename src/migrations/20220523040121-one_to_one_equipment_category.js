'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('equipments', {
      fields: ['cate_id'],
      type: 'foreign key',
      name: 'equipments_association',
      references: {
        table: 'categories',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('equipments', {
      fields: ['cate_id'],
      type: 'foreign key',
      name: 'equipments_association',
      references: {
        table: 'categories',
        field: 'id'
      }
    });
  }
};
