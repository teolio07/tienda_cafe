const productsService = require('./../services/productsServices') 
const service = new productsService

const getProducts = async (req,res)=>{
    try{  
        const getProducts = service.getProducts() 
        getProducts.then((res)=>{ 
            console.log(res)
        })
        res.json(getProducts)
    }
    catch(error){
        console.log(error)
        res.send('algo salio mal')
    }
}


const getProduct= async(req,res)=>{ 
    try{ 
        const { productId  } = req.params
        const getProduct = service.getProduct(productId)            
        getProduct.then((result)=>{ 
            console.log(result)
        })
        res.json(getProduct)
    } 
    catch(error){ 
        console.log('error get product by id')
        res.send('error get product by id')
    }
}


const saveProduct = async (req,res)=>{
    try{
        let name = req.body.name
        let picture = req.body.picture
        let price = req.body.price
        let category = req.body.category
        console.log(name)
        const saveProducts = service.saveProducts(name, picture, price, category)
        saveProducts.then((resolve)=>{
            console.log(resolve)
            res.json(resolve)
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getProducts, getProduct, saveProduct}
