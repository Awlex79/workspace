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
    constructor(id, t, imageURL, description, price) {
        this.id = id;
        this.title = t;
        this.imageUrl = imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                    });
            } else {}
            let random = Math.random() * 9999;
            this.id = Math.round(random).toString();
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