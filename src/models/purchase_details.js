'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  purchase_details.init({
    pur_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    equip_qty: DataTypes.INTEGER,
    pur_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'purchase_details',
  });
  return purchase_details;
};