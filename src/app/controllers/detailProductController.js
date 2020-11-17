const detailProductModel = require('../models/detailProductModel');

exports.index = (req, res, next) => {
    const product = detailProductModel.get();
    res.render('detail',{product});
};