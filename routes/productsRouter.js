const express = require('express');
const { getProducts, getProduct, saveProduct, productDelete, productUpdate } = require('../controllers/productsController') 
const router = express.Router();


router.get('/', getProducts)

router.get('/:productId',getProduct)

router.post('/',saveProduct )

router.put('/:productId', productUpdate)

router.delete('/:productId', productDelete)


module.exports = router;
