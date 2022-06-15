const {insertProduct} = require('../services/productsServices')
const newProduct = async (req,res)=>{
    const body = req.body
    console.log(body)
    try{
        let name = body.name
        let picture = body.picture
        let price = body.price
        let category = body.category
        insertProduct(name, picture, price, category) 
        res.send('producto creado')
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {newProduct};
