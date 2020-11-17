const loginRouter=require('./login');
const indexRouter=require('./main')

function route(app){

    // app.get('/login', function (req, res) {
    //     res.render('login');
    // });

    app.use('/login', loginRouter);

    app.get('/', indexRouter);
}

module.exports = route;
