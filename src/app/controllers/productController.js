
class ProductController{

    //[GET] product
    index(req, res){
        res.render('listproduct');
    }

    //[GET] /product/:slug
    show(req, res){
        res.send('DETAIL');
    }

}

module.exports = new ProductController;