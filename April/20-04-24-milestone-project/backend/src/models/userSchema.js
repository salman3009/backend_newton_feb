const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:4,
        maxlength:25
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    later:{
        type:Array
    }
})

module.exports = mongoose.model('user',userSchema);

