'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {}
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