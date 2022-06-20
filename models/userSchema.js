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
    date:{ 
        type: Date,
        default: Date.now
    }
})

const userSchema = mongoose.model('users', usersSchema)
module.exports = userSchema; 
