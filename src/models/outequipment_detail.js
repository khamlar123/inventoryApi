'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class outequipment_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  outequipment_detail.init({
    out_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    out_qty: DataTypes.INTEGER,
    out_date: DataTypes.DATE,
    depament: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'outequipment_details',
  });
  return outequipment_detail;
};