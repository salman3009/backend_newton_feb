const blogsSchema = require('../models/blogsSchema');


async function createBlogs(req,res) {
    try {
        console.log(req.body);
        const blogs = new blogsSchema({
            title: req.body.title,
            description: req.body.description,
            user:req.id,
            comments:req.body.comments?req.body.comments:[],
            created:req.created
        })
        let result = await blogs.save();
        res.status(201).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


async function getBlogsById(req,res) {
    try {
        let result = await blogsSchema.findById(req.params.id);
        res.status(200).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


async function getBlogs(req, res) {
    try {
        let result = await blogsSchema.find();
        res.status(200).json({
            status: "success",
            result
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}



async function updateBlogsById(req, res) {
    try {
        let result = await blogsSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


async function deleteBlogsById(req,res) {
    try {
        let result = await blogsSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"deleted successfully",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}



async function updateBlogsComments(req, res) {
    try {
        let result = await blogsSchema.findById(req.params.id);
        result.comments.push(req.body.comments);
        let updateByComments = await blogsSchema.findByIdAndUpdate(req.params.id, result, { new: true });
        res.status(200).json({
            status:"comments updated successfully",
            updateByComments
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}

async function updateBlogsByVote(req, res) {
    try {
        let result = await blogsSchema.findById(req.params.id);
        if(req.body.vote){
              result.upvote++; 
        }
        else{
            result.downvote++;
        }
        
        let updateByVote = await blogsSchema.findByIdAndUpdate(req.params.id, result, { new: true });
        res.status(200).json({
            status:"upvote/downvote updated successfully",
            updateByVote
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}

module.exports = {
    createBlogs,
    getBlogsById,
    updateBlogsById,
    deleteBlogsById,
    getBlogs,
    updateBlogsComments,
    updateBlogsByVote
}