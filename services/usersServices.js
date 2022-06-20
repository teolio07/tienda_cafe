const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')


class usersService{

    async usersRegister(name,email,password){ 
        //validate email
        const isEmailExist = await userSchema.findOne({ email });
        if (isEmailExist) {
            return (
                {error: 'Email ya registrado'}
            )
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);        




        //create user
        try{
            const userRegister = new userSchema() 
            userRegister.name = name 
            userRegister.email = email
            userRegister.password = password
            await userRegister.save()
            return userRegister
        }
        catch(error){ 
            return ('error al registrar el usuario desde  el servicio de usuario') 
        }
    }


    async usersLogin(email, password,){
   
        
        try{
            const validateEmail = await userSchema.findOne({email})       
            if(!validateEmail) return ({ 
                error: "Usuario  no encontrado"
            })

            const validatePassword = await bcrypt.compare(password, validateEmail.password);
            if (!validatePassword) return ({ error: 'contraseña no válida' })

            const token = jwt.sign({
                name: validateEmail.name,
                id: validateEmail._id
            }, process.env.TOKEN_SECRET)
        
            return ({data: "registrado", 
                    token
            })
        }
        catch(error){ 
            console.log('error al loguearse desde user service')
        }
        
    }


    
}

module.exports = usersService;
