const mongoose = require('mongoose');

const tourSchema =mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    price:{type:Number,required:true}
})

//tourSchema collection name
module.exports = mongoose.model('tour',tourSchema);