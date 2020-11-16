const productsModel = require('../models/products.model');


exports.index = function (req, res, next) {
    // get books from models
    const products = productsModel.list();

    // render page list
    res.render('index', { products });
}
