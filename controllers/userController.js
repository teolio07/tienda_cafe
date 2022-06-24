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
    
    //validate data user
    const { error  } = schemaRegister.validate(req.body)
     
    if(error) {
        return res.status(400).json( 
            {error: error.details[0].message}
        )
    }



    try{
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const register = service.usersRegister(name,email,password)
        register.then((response)=>{ 
            const data = response.data;
            if(data == null){
                return res.status(response.output.statusCode).json(response.output.payload);      
            }
            res.json(response);
        })
        
    }
    catch(error){
        return res.send('Server error')
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
                const state = resolve.state 
                const token = resolve.token 
                if(token == null){ 
                   return res.status(resolve.output.statusCode).json(resolve.output.payload)
                }
                res.header('auth-token', token).json({
                    information:'logueado',
                    error: null,
                    state: state, 
                    token
                })

            }
        )
    }
    catch(error){ 
        return ('Server error')
    }
    
    

}

module.exports = {userRegister, userLogin }
