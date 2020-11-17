class MainController{

    //[GET] product
    index(req, res){
        res.render('index');
    }
}

module.exports = new MainController;