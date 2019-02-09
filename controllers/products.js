const Product = require('../models/product');

//const rootDir = require ('../util/path');



exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    });
    
};
