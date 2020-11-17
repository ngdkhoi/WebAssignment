const loginRouter=require('./login');
const indexRouter=require('./main')
const productsRouter = require('./listproduct');
const detailRouter = require('./detail');

function route(app){

    // app.get('/login', function (req, res) {
    //     res.render('login');
    // });

    app.use('/login', loginRouter);

    app.get('/', indexRouter);

    app.use('/products', productsRouter);

    app.use('/detail', detailRouter);
}

module.exports = route;
