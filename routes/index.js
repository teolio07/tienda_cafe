const express = require('express');
const userRouter = require('./userRouter')
const productRouter = require('./productRouter');
const commentRouter = require('./commentRouter')

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products',productRouter);
    router.use('/user', userRouter)
    router.use('/comment',commentRouter )
}

module.exports = routerApi;
