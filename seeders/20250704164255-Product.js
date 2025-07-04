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
      "name": "dapibus at",
      "imagePath": "/images/brand-realme.png",
      "oldPrice": 36.96,
      "price": 64.36,
      "summary": "Aenean lectus. Pellentesque eget nunc.",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "specification": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "stars": 0,
      "quantity": 30,
      "categoryId": 2,
      "brandId": 4
    }, {
      "name": "urna pretium nisl",
      "imagePath": "/images/brand-apple.png",
      "oldPrice": 66.82,
      "price": 65.92,
      "summary": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
      "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "specification": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "stars": 0,
      "quantity": 49,
      "categoryId": 3,
      "brandId": 5
    }, {
      "name": "ut erat",
      "imagePath": "/images/brand-samsung.png",
      "oldPrice": 58.43,
      "price": 90.55,
      "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "specification": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "stars": 0,
      "quantity": 8,
      "categoryId": 1,
      "brandId": 5
    }, {
      "name": "cubilia curae",
      "imagePath": "/images/brand-apple.png",
      "oldPrice": 32.75,
      "price": 79.97,
      "summary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "stars": 0,
      "quantity": 55,
      "categoryId": 2,
      "brandId": 5
    }, {
      "name": "elit ac",
      "imagePath": "/images/brand-vivo.png",
      "oldPrice": 1.82,
      "price": 74.89,
      "summary": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "specification": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "stars": 0,
      "quantity": 54,
      "categoryId": 4,
      "brandId": 1
    }, {
      "name": "vestibulum ante",
      "imagePath": "/images/brand-huawei.png",
      "oldPrice": 16.22,
      "price": 14.58,
      "summary": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "specification": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "stars": 0,
      "quantity": 38,
      "categoryId": 4,
      "brandId": 3
    }, {
      "name": "metus sapien",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 77.16,
      "price": 47.97,
      "summary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "specification": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      "stars": 0,
      "quantity": 60,
      "categoryId": 1,
      "brandId": 5
    }, {
      "name": "neque aenean auctor",
      "imagePath": "/images/brand-oppo.png",
      "oldPrice": 45.87,
      "price": 7.95,
      "summary": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
      "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      "specification": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "stars": 0,
      "quantity": 23,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "at feugiat",
      "imagePath": "/images/brand-oppo.png",
      "oldPrice": 79.1,
      "price": 99.96,
      "summary": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "specification": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "stars": 0,
      "quantity": 29,
      "categoryId": 4,
      "brandId": 3
    }, {
      "name": "velit nec nisi",
      "imagePath": "/images/brand-huawei.png",
      "oldPrice": 71.18,
      "price": 32.11,
      "summary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "stars": 0,
      "quantity": 29,
      "categoryId": 3,
      "brandId": 2
    }, {
      "name": "curae mauris",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 33.06,
      "price": 63.66,
      "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "specification": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "stars": 0,
      "quantity": 91,
      "categoryId": 1,
      "brandId": 2
    }, {
      "name": "in faucibus orci",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 46.76,
      "price": 25.53,
      "summary": "Phasellus in felis. Donec semper sapien a libero.",
      "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "specification": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "stars": 0,
      "quantity": 26,
      "categoryId": 2,
      "brandId": 6
    }, {
      "name": "hac habitasse platea",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 2.05,
      "price": 91.89,
      "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "specification": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "stars": 0,
      "quantity": 25,
      "categoryId": 3,
      "brandId": 2
    }, {
      "name": "ipsum ac tellus",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 40.39,
      "price": 4.79,
      "summary": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
      "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "specification": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "stars": 0,
      "quantity": 37,
      "categoryId": 1,
      "brandId": 4
    }, {
      "name": "sed sagittis",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 51.01,
      "price": 71.61,
      "summary": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "specification": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "stars": 0,
      "quantity": 6,
      "categoryId": 4,
      "brandId": 5
    }, {
      "name": "nam ultrices",
      "imagePath": "/images/brand-vivo.png",
      "oldPrice": 33.3,
      "price": 55.42,
      "summary": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "specification": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "stars": 0,
      "quantity": 10,
      "categoryId": 2,
      "brandId": 6
    }, {
      "name": "volutpat eleifend donec",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 71.39,
      "price": 31.01,
      "summary": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
      "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "specification": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "stars": 0,
      "quantity": 48,
      "categoryId": 4,
      "brandId": 5
    }, {
      "name": "phasellus in",
      "imagePath": "/images/brand-vivo.png",
      "oldPrice": 6.8,
      "price": 7.43,
      "summary": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "specification": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "stars": 0,
      "quantity": 57,
      "categoryId": 4,
      "brandId": 5
    }, {
      "name": "eros viverra",
      "imagePath": "/images/brand-realme.png",
      "oldPrice": 60.15,
      "price": 5.52,
      "summary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "specification": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "stars": 0,
      "quantity": 69,
      "categoryId": 1,
      "brandId": 1
    }, {
      "name": "auctor sed",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 5.7,
      "price": 93.64,
      "summary": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      "specification": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "stars": 0,
      "quantity": 38,
      "categoryId": 4,
      "brandId": 4
    }, {
      "name": "nunc commodo",
      "imagePath": "/images/brand-realme.png",
      "oldPrice": 50.36,
      "price": 22.32,
      "summary": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "specification": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "stars": 0,
      "quantity": 54,
      "categoryId": 3,
      "brandId": 2
    }, {
      "name": "suspendisse ornare consequat",
      "imagePath": "/images/brand-samsung.png",
      "oldPrice": 55.82,
      "price": 81.93,
      "summary": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "specification": "In congue. Etiam justo. Etiam pretium iaculis justo.",
      "stars": 0,
      "quantity": 24,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "orci vehicula",
      "imagePath": "/images/brand-oppo.png",
      "oldPrice": 15.64,
      "price": 74.07,
      "summary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "stars": 0,
      "quantity": 63,
      "categoryId": 4,
      "brandId": 5
    }, {
      "name": "consequat metus sapien",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 77.84,
      "price": 76.57,
      "summary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "specification": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "stars": 0,
      "quantity": 20,
      "categoryId": 1,
      "brandId": 4
    }, {
      "name": "turpis a",
      "imagePath": "/images/brand-realme.png",
      "oldPrice": 5.57,
      "price": 62.35,
      "summary": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "stars": 0,
      "quantity": 34,
      "categoryId": 3,
      "brandId": 4
    }, {
      "name": "magna bibendum",
      "imagePath": "/images/brand-vivo.png",
      "oldPrice": 93.61,
      "price": 59.58,
      "summary": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "specification": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "stars": 0,
      "quantity": 38,
      "categoryId": 1,
      "brandId": 2
    }, {
      "name": "dui maecenas",
      "imagePath": "/images/brand-oppo.png",
      "oldPrice": 60.2,
      "price": 48.02,
      "summary": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "specification": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "stars": 0,
      "quantity": 5,
      "categoryId": 4,
      "brandId": 1
    }, {
      "name": "est donec odio",
      "imagePath": "/images/brand-samsung.png",
      "oldPrice": 46.64,
      "price": 80.73,
      "summary": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "specification": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "stars": 0,
      "quantity": 62,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "nunc proin at",
      "imagePath": "/images/brand-xiaomi.png",
      "oldPrice": 55.41,
      "price": 16.08,
      "summary": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "specification": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "stars": 0,
      "quantity": 94,
      "categoryId": 2,
      "brandId": 2
    }, {
      "name": "quisque id",
      "imagePath": "/images/brand-vivo.png",
      "oldPrice": 67.58,
      "price": 79.07,
      "summary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "specification": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "stars": 0,
      "quantity": 87,
      "categoryId": 1,
      "brandId": 1
    }];

    // khi insert dữ liệu vào thì sẽ lấy thời gian trong CSDL
    data.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });

    // insert dữ liệu vào bảng brand
    await queryInterface.bulkInsert('Products', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // xóa tất cả dữ liệu trong bảng Brand
    await queryInterface.bulkDelete('Products', null, {});

  }
};
