'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('out_equipments', {
      fields: ['staff_id'],
      type: 'foreign key',
      name: 'out_equipment_one_to_many_association',
      references: {
        table: 'staffs',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('out_equipments', {
      fields: ['staff_id'],
      type: 'foreign key',
      name: 'out_equipment_one_to_many_association',
      references: {
        table: 'staffs',
        field: 'id'
      }
    });
  }
};
