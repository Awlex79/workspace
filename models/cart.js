const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    /* 
    constractor() {
        this.products = [];
        this.totalPrice = 0;
    }
    */

    static addProduct(id) {
     // fetch the previous cart


     //analyse the cart => find existing product
     // add new product/increase quantity   
    }
}