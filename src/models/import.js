'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class
  imports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imports.init({
    pur_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    import_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'imports',
  });
  return imports;
};