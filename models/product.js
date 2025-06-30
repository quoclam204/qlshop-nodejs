'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // thiết lập mối quan hệ
    static associate(models) {
      Product.hasMany(models.Image, { foreignKey: 'productId'}); // 1 sp có nhiều hình ảnh
      Product.belongsTo(models.Brand, { foreignKey: 'brandId'}); // 1 sp chỉ có 1 nhãn hàng

      Product.belongsToMany( models.Tag, {
        through: 'ProductTag',
        foreignKey: 'productId',
        otherKey: 'tagId' 
      });
    }
  }

  // các thuộc tính
  Product.init({
    name: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    oldPrice: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    summary: DataTypes.TEXT,  
    description: DataTypes.TEXT,
    specification: DataTypes.TEXT,
    stars: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};