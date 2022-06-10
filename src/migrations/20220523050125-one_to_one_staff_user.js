'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addConstraint('Users', {
      fields: ['staff_id'],
      type: 'foreign key',
      name: 'staff_user_association',
      references: {
        table: 'staffs',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.reomoveConstraint('Users', {
      fields: ['staff_id'],
      type: 'foreign key',
      name: 'staff_user_association',
      references: {
        table: 'staffs',
        field: 'id'
      }
    })
  }
};
