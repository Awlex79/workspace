const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    //console.log('shop.js', adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;
    // for PUG res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
    // for Handlebars
    res.render('Shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
        // special key for not using templates-> 
        //layout: false
    })
});

module.exports = router;