const express = require('express');
const userRouter = require('./userRouter')
const productRouter = require('./productRouter');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products',productRouter);
    router.use('/user', userRouter)
}

module.exports = routerApi;
