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
    
    async saveProducts(name, picture, price, category){
        const saveProduct = new productSchema()
        saveProduct.name = name
        saveProduct.picture = picture
        saveProduct.price = price
        saveProduct.category = category
        await saveProduct.save()
        return saveProduct;
    }
}   


module.exports = productsService;

