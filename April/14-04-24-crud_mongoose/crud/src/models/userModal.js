const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true}
})

//User collection name
module.exports = mongoose.model('User',userSchema);