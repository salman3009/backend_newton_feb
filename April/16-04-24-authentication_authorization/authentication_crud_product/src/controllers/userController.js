const UserSchema = require('../models/userSchema');

async function createUser(req,res) {
    try {
        const user = new UserSchema({
            username: req.body.username,
            email: req.body.email,
            password:req.body.password
        })
        let result = await user.save();
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

module.exports ={
    createUser
}