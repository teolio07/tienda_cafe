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


module.exports = {getProducts, getProduct}
