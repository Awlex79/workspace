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
        this.image = imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
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
};