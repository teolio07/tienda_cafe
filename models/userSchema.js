const mongoose = require('mongoose');



const usersSchema = mongoose.Schema({
 
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    phone:{
        type:String,
        required:true,
        min:6,
        max:255

    },
    signUpDate:{ 
        type: Date,
        default: Date.now
    },
    lastLogin: Date
})

const userSchema = mongoose.model('users', usersSchema)
module.exports = userSchema; 
