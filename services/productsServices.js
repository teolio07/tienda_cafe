const productSchema = require('../models/productSchema') 

class productsService{
    async getProducts(){
        const products = await productSchema.find() 
        return products;
    }
    
    async getProduct(productId){  
        const products = await productSchema.findById(productId)
        return products;
    }
}   


module.exports = productsService;

