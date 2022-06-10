'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('import_details', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'import_details_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('purchases', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'purchase_association',
      references: { 
        table: 'equipments',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('positions', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'position_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

    
    await queryInterface.addConstraint('outequipment_details', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'outequipment_detail_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });


  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('import_details', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'import_details_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

    await queryInterface.removeConstraint('purchases', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'purchase_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

    await queryInterface.removeConstraint('positions', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'position_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

    
    await queryInterface.removeConstraint('outequipment_details', {
      fields: ['equip_id'],
      type: 'foreign key',
      name: 'outequipment_detail_association',
      references: {
        table: 'equipments',
        field: 'id'
      }
    });

  }
};
