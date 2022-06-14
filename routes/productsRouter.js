const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
   res.send(200, {products:[]}) 
})

router.get('/:productId'),(req,res)=>{
    }

router.post('',(req,res)=>{
    const body = req.body;
    console.log(req.body)
res.status(200).send({message: 'product received',
                      body})
})

router.post('/:productId',(req,res)=>{
    
})

router.put('/:productId',(req,res)=>{
    
})

router.delete('/:productId',(req,res)=>{
    
})


module.exports = router;
