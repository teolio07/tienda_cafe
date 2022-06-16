const express = require('express');
const { getProducts, getProduct } = require('../controllers/productsController') 
const router = express.Router();


router.get('/', getProducts)

router.get('/:productId',getProduct)

router.post('/', (req, res)=>{
    
})

router.post('/:productId',(req,res)=>{
    
})

router.put('/:productId',(req,res)=>{
    
})

router.delete('/:productId',(req,res)=>{
    
})


module.exports = router;
