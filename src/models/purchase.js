'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  purchase.init({
    equip_id: DataTypes.INTEGER,
    pur_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'purchases',
  });
  return purchase;
};