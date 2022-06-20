const productsService = require('./../services/productsServices') 
const service = new productsService

const getProducts = (req,res)=>{
    try{  
        const getProducts = service.getProducts() 
        getProducts.then((resolve)=> {
            console.log(resolve)
            res.send(resolve)   
        } )
         
    }
    catch(error){
        console.log(error)
        res.send('algo salio mal')
    }
}


const getProduct= (req,res)=>{ 
    try{ 
        const { productId  } = req.params
        const getProduct = service.getProduct(productId)            
        getProduct.then((resolve)=>{ 
            console.log(resolve)
            res.send(resolve)
        }) 
        
    } 
    catch(error){ 
        console.log(error)
        res.send('error get product by id')
    }
}


const saveProduct = (req,res)=>{
    try{
        let name = req.body.name
        let picture = req.body.picture
        let price = req.body.price
        let category = req.body.category
        console.log(name)
        const saveProducts = service.saveProducts(name, picture, price, category)
        saveProducts.then((resolve)=>{
            console.log(resolve)
            res.send(resolve)
        })
    }
    catch(error){
        console.log(error)
    }
}

const productDelete = (req,res)=>{
    try{
        let productId = req.params.productId    
        const productDelete = service.productDelete(productId);
        productDelete.then((resolve)=>{ 
            console.log(resolve);
            res.send(resolve)
        })
    }
    catch(error){
        console.log(error)
    }

}

const productUpdate= (req,res)=>{
    try{
        let update = req.body;
        let productId = req.params.productId
        console.log(update)
        const productUpdate = service.productUpdate(productId, update)
        productUpdate.then((resolve)=>{
            console.log(resolve)
            res.send(resolve)
        })
    }
    catch(error){
        console.log(error)
    }

}

module.exports = {getProducts, getProduct, saveProduct, productDelete, productUpdate}
