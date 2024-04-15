
var mongoose= require("mongoose");

//write your schema Here with name of schema as productSchema

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    instock:{
        type:String,
        enum:['Yes','No']
    }
})

module.exports =mongoose.model("products",productSchema);