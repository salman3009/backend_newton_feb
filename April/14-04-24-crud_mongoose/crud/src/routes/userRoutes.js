const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/',async (req,res)=>{
    try{
      let data = await userController.createUsers(req.body);
      res.status(201).json({
        status:"success",
        data
      })
    }catch(err){
        res.status(404).json({
            status:"failed",
            message:err
        })
    }
})

module.exports = router;