const productSchema = require('../models/productSchema') 

function insertProduct (name, picture, price, category){
        let product = new productSchema();
        product.name = name
        product.picture = picture
        product.price = price
        product.category = category
        product.save();
            

}

module.exports = {insertProduct}
