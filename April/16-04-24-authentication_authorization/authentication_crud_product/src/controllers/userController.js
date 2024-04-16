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

async function login(req,res){
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                status:"failed",
                message:"Please provide email and password"
            })
        }
        else{
            const user = await UserSchema.findOne({email:email});
            if(!user){
                return res.status(404).json({
                    status:"failed",
                    message:"email is not found"
                })
            }
            if(user && user.password != password){
                return res.status(404).json({
                    status:"failed",
                    message:"password is not match"
                })
            }

            res.status(201).json({
                status:"success",
                token:"xyz"
             })

        }

     
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}

module.exports ={
    createUser,
    login
}