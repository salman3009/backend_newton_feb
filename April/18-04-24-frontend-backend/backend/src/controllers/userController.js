const UserSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function registration(req,res) {
    try {
 
        const hashedPassword = bcrypt.hashSync(req.body.password,10);

        const user = new UserSchema({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword
        })
        let result = await user.save();
        res.status(201).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(500).json({
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
            console.log(user);
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

            const token = jwt.sign({username:user.username,email:user.email},"newton_school_secret",{expiresIn:"1h"});
            res.status(201).json({
                status:"success",
                token:token
             })

        }

     
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status:"failed",
            message:"internal server error try after sometime"
           })
    }
}

module.exports ={
    registration,
    login
}