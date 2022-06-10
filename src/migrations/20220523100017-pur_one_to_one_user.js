'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addConstraint('imports', {
      fields: ['pur_id'],
      type: 'foreign key',
      name: 'pur_one_to_one_user_pur',
      references: {
        table: 'purchases',
        field: 'id'
      }
    });

    await  queryInterface.addConstraint('imports', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_one_to_one_pur',
      references: {
        table: 'users',
        field: 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.removeConstraint('imports', {
      fields: ['pur_id'],
      type: 'foreign key',
      name: 'pur_one_to_one_user_pur',
      references: {
        table: 'purchases',
        field: 'id'
      }
    });

    await  queryInterface.removeConstraint('imports', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_one_to_one_pur',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  }
};
