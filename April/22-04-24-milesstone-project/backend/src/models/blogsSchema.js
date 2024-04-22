const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
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
    },
    created:{
        type:String
    },
    comments:{
        type:Array
    },
    upvote:{
        type:Number,
        required:true,
        default:0
    },
    downvote:{
        type:Number,
        required:true,
        default:0
    }
})

module.exports = mongoose.model('blog',blogsSchema);