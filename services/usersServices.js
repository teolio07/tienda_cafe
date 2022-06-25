const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')
const boom = require('@hapi/boom')


class usersService{

    async usersRegister(name,email,phone,password){ 
        //validate email
        const isEmailExist = await userSchema.findOne({ email });
        if (isEmailExist) {
            return (boom.badRequest('User already registered'))
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);        




        //create user
        try{
            const userRegister = new userSchema() 
            userRegister.name = name 
            userRegister.email = email
            userRegister.phone = phone
            userRegister.password = password
            await userRegister.save()
            return userRegister
        }
        catch(error){ 
            return (boom.badImplementation('Error registering user ')) 
        }
    }


    async usersLogin(email, password,){
   
        
        try{
            const validateEmail = await userSchema.findOne({email});       
            if(!validateEmail) return (boom.badData('Email and password are not valid '))

            const validatePassword = await bcrypt.compare(password, validateEmail.password);
            if (!validatePassword) return (boom.badData('Email and password are not valid '))
            let nameUser= validateEmail.name
            const token = jwt.sign({
                name: validateEmail.name,
                id: validateEmail._id
            }, process.env.TOKEN_SECRET)
        
            return ({message: "Session started", 
                    token,
                    name: nameUser

            })
        }
        catch(error){ 
            return (boom.badImplementation('Error login user')) 
        }
        
    }


    
}

module.exports = usersService;
