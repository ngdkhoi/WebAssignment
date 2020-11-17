const loginRouter=require('./login');
const indexRouter=require('./main')
const productsRouter = require('./listproduct');

function route(app){

    // app.get('/login', function (req, res) {
    //     res.render('login');
    // });

    app.use('/login', loginRouter);

    app.get('/', indexRouter);

    app.use('/products', productsRouter);
}

module.exports = route;
