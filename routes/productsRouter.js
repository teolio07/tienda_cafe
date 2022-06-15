const express = require('express');
const { newProduct  } = require('../controllers/productsController') 
const router = express.Router();


router.get('/',(req,res)=>{
   res.send(200, {products:[]}) 
})

router.get('/:productId'),(req,res)=>{
    }

router.post('/', newProduct)

router.post('/:productId',(req,res)=>{
    
})

router.put('/:productId',(req,res)=>{
    
})

router.delete('/:productId',(req,res)=>{
    
})


module.exports = router;
