'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class import_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  import_details.init({
    import_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    equip_qty: DataTypes.INTEGER,
    import_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'import_details',
  });
  return import_details;
};