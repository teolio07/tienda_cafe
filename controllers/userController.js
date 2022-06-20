const usersService = require('./../services/usersServices')
const service = new usersService
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken')

//validate data register
const schemaRegister = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email() ,
    password: Joi.string().min(6).max(255).required(),
   
})


//validate data login
const schemaLogin = Joi.object({ 
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required()

})




const userRegister =async (req,res)=>{
    
    //validate user
    const { error  } = schemaRegister.validate(req.body)
     
    if(error) {
        return res.status(400).json( 
            {error: error.details[0].message}
        )
    }



    try{
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        const register = service.usersRegister(name,email,password)
        register.then((resolve)=>{ 
            console.log(resolve)
            res.send(resolve)
        })
        
    }
    catch(error){
        return ('error al registrar usuario desde user controller')
    }
}

const userLogin = async (req,res)=>{
    //validate data login
    const { error  } = schemaLogin.validate(req.body)  
    if(error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }
     
    
    try{
        let email = req.body.email
        let password = req.body.password
        const login = service.usersLogin(email,password)
        login.then((resolve)=>{ 
                const token = resolve.token 
                res.header('auth-token', token).json({
                    error: null,
                    data: {token}
                })

            }
        )
    }
    catch(error){ 
        return ('error al loguerse desde user controller')
    }
    
    

}

module.exports = {userRegister, userLogin }
