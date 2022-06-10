'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipment.init({
    cate_id: DataTypes.INTEGER,
    unit_id: DataTypes.INTEGER,
    equip_name: DataTypes.STRING,
    equip_stock: DataTypes.INTEGER,
    equip_import: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'equipments',
  });
  return equipments;
};