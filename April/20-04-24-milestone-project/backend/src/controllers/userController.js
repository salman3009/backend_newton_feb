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
            let passwordResult = bcrypt.compareSync(password,user.password);
            if(user && !passwordResult){
                return res.status(404).json({
                    status:"failed",
                    message:"password is not match"
                })
            }

            const token = jwt.sign({username:user.username,id:user._id},"newton_school_secret",{expiresIn:"1h"});
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

async function userInformation(req,res) {
    try {
        let result = await UserSchema.findById(req.params.id);
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


module.exports ={
    registration,
    login,
    userInformation
}