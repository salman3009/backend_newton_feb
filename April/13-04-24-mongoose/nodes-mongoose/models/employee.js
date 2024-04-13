const mongoose = require('mongoose');

const employeeSchema =mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    status:{type:Boolean,required:true,default:false},
    age:{type:Number,required:true}
})

//employee collection name
module.exports = mongoose.model('employee',employeeSchema);