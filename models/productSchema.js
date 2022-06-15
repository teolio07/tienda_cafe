const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: String,
    picture: String,
    price: Number,
    category: {type: String, enum:['computers','phones','accesoriers']}
})

const productSchema = mongoose.model('products', productsSchema)
module.exports = productSchema;
