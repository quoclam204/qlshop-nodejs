'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // tạo dữ liệu cho bảng brand
    let data = [{
      name: 'Apple',
      imagePath: '/images/brand-apple.png'
    },

    {
      name: 'Huawei',
      imagePath: '/images/brand-huawei.png'
    },

    {
      name: 'Oppo',
      imagePath: '/images/brand-oppo.png'
    },

    {
      name: 'Realme',
      imagePath: '/images/brand-realme.png'
    },

    {
      name: 'Vivo',
      imagePath: '/images/brand-vivo.png'
    },

    {
      name: 'Samsung',
      imagePath: '/images/brand-samsung.png'
    },

    {
      name: 'Xiaomi',
      imagePath: '/images/brand-xiaomi.png'
    },];

    // khi insert dữ liệu vào thì sẽ lấy thời gian trong CSDL
    data.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()'); 
      item.updatedAt = Sequelize.literal('NOW()'); 
    });

    // insert dữ liệu vào bảng brand
    await queryInterface.bulkInsert('Brands', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // xóa tất cả dữ liệu trong bảng Brand
    await queryInterface.bulkDelete('Brands', null, {});

  }
};
