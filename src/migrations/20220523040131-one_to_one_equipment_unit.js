'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('equipments', {
      fields: ['unit_id'],
      type: 'foreign key',
      name: 'equipment_association',
      references: {
        table: 'units',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('equipments', {
      fields: ['unit_id'],
      type: 'foreign key',
      name: 'unit_association',
      references: { 
        table: 'units',
        field: 'id'
      }
    });
  }
};
