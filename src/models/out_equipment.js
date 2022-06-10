'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class out_equipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  out_equipment.init({
    staff_id: DataTypes.INTEGER,
    out_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'out_equipments',
  });
  return out_equipments;
};