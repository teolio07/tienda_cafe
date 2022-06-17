const productSchema = require('../models/productSchema') 

class productsService{
    async getProducts(){
        const products = await productSchema.find() 
        return products;
    }
    
    async getProduct(productId){  
        const getProduct = await productSchema.findById(productId)
        return getProduct;
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
    
    async productDelete(productId){
        const product = await productSchema.findByIdAndDelete(productId)       
        return product;
    }
    
    async productUpdate(productId, update){
        const product = await productSchema.findByIdAndUpdate(productId, update)
        return product
    }
    

}   

module.exports = productsService;

