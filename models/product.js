const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    picture: String,
    price:Number,
    category:{type: String, enum:['computeres','phone','accesories']},
    description: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;

