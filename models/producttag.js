'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // định nghĩa 2 khóa ngoạino
      ProductTag.belongsTo(models.Product, {
        foreignKey: 'productId'
      });

      ProductTag.belongsTo(models.Tag, {
        foreignKey: 'tagId'
      });
    }
  }
  ProductTag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductTag',
  });
  return ProductTag;
};