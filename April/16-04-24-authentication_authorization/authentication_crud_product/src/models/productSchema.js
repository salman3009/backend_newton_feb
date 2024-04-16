const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model('product',productSchema);