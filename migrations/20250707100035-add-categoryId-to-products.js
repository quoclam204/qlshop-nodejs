'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'categoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories', // tên bảng categories (đúng tên trong DB)
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'categoryId');
  }
};
