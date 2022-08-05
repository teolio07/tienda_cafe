const productSchema = require('../models/productSchema') 

class productsService{
    async getProducts(){
        try{ 
            const products = await productSchema.find() 
            return products;
        }
        catch(error){ 
            return ('products not found')
        }

    }
    
    async getProduct(productId){    
        try{ 
            const getProduct = await productSchema.findById(productId)        
            return getProduct
        }
        catch(error){  
            return ('product not found')
        }
    } 

    async saveProducts(name, picture, price, category){
        try{    
            const saveProduct = new productSchema()
            saveProduct.name = name
            saveProduct.picture = picture
            saveProduct.price = price
            saveProduct.category = category
            await saveProduct.save()
            return saveProduct;   
        } 
        catch(error){
            return ('error saving product')
        }
        
    }
    
    async productDelete(productId){
        try{
            const product = await productSchema.findByIdAndDelete(productId)       
            return product;            
        }
        catch(error){
            return ('error removing product')
        }

    }
    
    async productUpdate(productId, update){
        try{
            let product = await productSchema.findByIdAndUpdate(productId, update)
            return product
        }
        catch(error){
            console.log(error)
            return ('error update product')
        }

    }
    
}   

module.exports = productsService;

