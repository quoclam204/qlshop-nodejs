'use strict'

const path = require('path');

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

// nạp thư viện express-handlebars vào biến expressHandlebars
const expressHandlebars = require('express-handlebars');

// cau hinh de su dung express handlebars
app.engine('hbs', expressHandlebars.engine ({
    layoutsDir: __dirname + '/views/layouts',

    partialsDir: __dirname + '/views/partials',

    // đuôi file là hbs
    extname: 'hbs',

    // file layout chính
    defaultLayout: 'main'
    
}));

app.set('view engine', 'hbs');

// Route để tạo bảng bằng Sequelize
app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('tables created!');
    });
});

app.get('/', (req, res) => {
    res.render('index');  // se lay index.hbs do vao {{{ body }}} trong main.hbs
});

// hiển thị các trang con (các trang mà người dùng truy cập)
app.get('/:page', (req, res) => {
    res.render(req.params.page);
});

app.use(express.static(path.join(__dirname, 'public')));

// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});

