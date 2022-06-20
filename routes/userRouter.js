const express = require('express');
const {userRegister, userLogin } = require('../controllers/userController') 
const Token = require('../middlewares/validateToken')
const userRouter = express.Router();


userRouter.post('/register', userRegister)

userRouter.post('/login', userLogin )

userRouter.get('/admin', Token , (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user
        }
    })
})

userRouter.get('/:productId',)

userRouter.put('/:productId', )

userRouter.delete('/:productId', )

module.exports = userRouter;
