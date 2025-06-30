'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongsToMany quan hệ 1 N N
      // models.Product là model mà bạn đang thiết lập quan hệ với
      Tag.belongsToMany(models.Product, { 
        through: 'ProductTag', // dùng bảng trung gian là ProductTag 
        foreignKey: 'tagId', // khóa ngoại tham chiếu đến bảng Tag
        otherKey: 'productId' // khóa ngoại tham chiếu đến bảng Product
      });
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};