class LoginController{

    //[GET] product
    index(req, res){
        res.render('login');
    }

}

module.exports = new LoginController;

