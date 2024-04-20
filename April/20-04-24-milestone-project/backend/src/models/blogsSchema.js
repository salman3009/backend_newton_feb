const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:String
    }
})

module.exports = mongoose.model('product',productSchema);