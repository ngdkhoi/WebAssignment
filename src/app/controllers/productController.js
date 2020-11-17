const productModel = require('../models/productModel');

exports.index = (req, res, next) => {
    // Get products from model
    const products = productModel.list();
    // Pass data to view to display list of products
    res.render('products', {products});
};