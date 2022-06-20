const express = require('express');
const { getProducts, getProduct, saveProduct, productDelete, productUpdate } = require('../controllers/productController') 
const productRouter = express.Router();


productRouter.get('/', getProducts)

productRouter.get('/:productId',getProduct)

productRouter.post('/',saveProduct )

productRouter.put('/:productId', productUpdate)

productRouter.delete('/:productId', productDelete)


module.exports = productRouter;
