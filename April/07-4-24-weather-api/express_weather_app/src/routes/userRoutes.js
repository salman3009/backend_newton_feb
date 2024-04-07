const express =require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    res.status(200).json({
        message:"login"
    })
})

router.post('/register',(req,res)=>{
     res.status(200).json({
        message:"register"
     })
})

module.exports = router;