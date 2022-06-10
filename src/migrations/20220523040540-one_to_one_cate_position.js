'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('positions', {
      fields: ['cate_id'],
      type: 'foreign key',
      name: 'positions_one_to_one_association',
      references: {
        table: 'categories',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('positions', {
      fields: ['cate_id'],
      type: 'foreign key',
      name: 'positions_one_to_one_association',
      references: {
        table: 'categories',
        field: 'id'
      }
    });
  }
};
