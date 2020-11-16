const productsModel = require('../models/products.model');


exports.list = function (req, res, next) {
    // get books from models
    const products = productsModel.list();

    // render page list
    res.render('products/list', { products });
}

exports.detail= function(req, res, next) {
    const productId = req.params.productId;

    // get books from models
    const product = productsModel.productById(productId);
    


    // if (product) {
    res.render('products/detail', { product });
    // }
    // else 
    //     // can them trang 404 de cho nay render 404 page
    //     res.render('index', {products});
}