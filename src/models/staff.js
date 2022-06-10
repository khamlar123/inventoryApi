'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staff.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    gender: DataTypes.STRING,
    bod: DataTypes.DATE, 
    village: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    phone: DataTypes.STRING,
    contact_info: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'staffs',
  });
  return staff;
};