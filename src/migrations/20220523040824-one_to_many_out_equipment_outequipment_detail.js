'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('outequipment_details', {
      fields: ['out_id'],
      type: 'foreign key',
      name: 'outequipment_detail_one_to_many_association',
      references: {
        table: 'out_equipments',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('outequipment_details', {
      fields: ['out_id'],
      type: 'foreign key',
      name: 'outequipment_detail_one_to_many_association',
      references: {
        table: 'out_equipments',
        field: 'id'
      }
    });
  }
};
