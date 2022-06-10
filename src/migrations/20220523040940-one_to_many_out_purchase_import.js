'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('purchase_details', {
      fields: ['pur_id'],
      type: 'foreign key',
      name: 'purchase_one_to_many_association',
      references: {
        table: 'purchases',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('purchase_details', {
      fields: ['pur_id'],
      type: 'foreign key',
      name: 'purchase_one_to_many_association',
      references: {
        table: 'purchases',
        field: 'id'
      }
    });
  }
};
