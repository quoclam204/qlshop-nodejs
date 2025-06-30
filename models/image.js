'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Product, { foreignKey: 'productId'}); // 1 hinh anh thuoc ve 1 sp
    }
  }
  Image.init({
    name: DataTypes.STRING,
    imagePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};