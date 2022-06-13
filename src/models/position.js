'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class positions extends Model {}
  position.init({
    equip_id: DataTypes.INTEGER,
    cate_id: DataTypes.INTEGER,
    pos_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'positions',
  });
  return positions;
};