const express = require('express');
const { getProducts, getProduct, saveProduct } = require('../controllers/productsController') 
const router = express.Router();


router.get('/', getProducts)

router.get('/:productId',getProduct)

router.post('/',saveProduct )

router.put('/:productId',(req,res)=>{
    
})

router.delete('/:productId',(req,res)=>{
    
})


module.exports = router;
