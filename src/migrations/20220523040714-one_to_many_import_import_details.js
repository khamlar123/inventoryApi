'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('import_details', {
      fields: ['import_id'],
      type: 'foreign key',
      name: 'imports_one_to_many_association',
      references: {
        table: 'imports',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('import_details', {
      fields: ['import_id'],
      type: 'foreign key',
      name: 'imports_one_to_many_association',
      references: {
        table: 'imports',
        field: 'id'
      }
    });
  }
};
