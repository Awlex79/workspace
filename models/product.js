const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductsFromFile = callBack => {
   
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callBack([]);
        } 
        callBack(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(t, imageURL, description, price) {
        this.title = t;
        this.imageUrl = imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
        let random = Math.random() * 9999;
        this.id = Math.round(random).toString();
        
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
                });
       });
    };

    static fetchAll(cb) {
        getProductsFromFile(cb);
    };

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    } 
};