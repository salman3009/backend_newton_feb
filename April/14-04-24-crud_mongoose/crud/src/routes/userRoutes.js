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


router.get('/',async (req,res)=>{
  try{
    let data = await userController.findUsers();
    res.status(200).json({
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

router.get('/:id',async (req,res)=>{
  try{
    let data = await userController.findByIdUsers(req.params.id);
    if(!data){
      res.status(404).json({
        status:"failed",
        message:"user not found"
      })
    }else{
      res.status(200).json({
        status:"success",
        data
      })
    }
 
  }catch(err){
      res.status(404).json({
          status:"failed",
          message:err
      })
  }
})


router.delete('/:id',async (req,res)=>{
  try{
    let data = await userController.deleteByIdUsers(req.params.id);
    if(!data){
      res.status(404).json({
        status:"failed",
        message:"user not found"
      })
    }else{
      res.status(200).json({
        status:"Deleted successfully",
        data
      })
    }
 
  }catch(err){
      res.status(404).json({
          status:"failed",
          message:err
      })
  }
})


router.patch('/:id',async (req,res)=>{
  try{
    let data = await userController.updateByIdUsers(req.params.id,req.body);
    if(!data){
      res.status(404).json({
        status:"failed",
        message:"user not found"
      })
    }else{
      res.status(200).json({
        status:"updated successfully",
        data
      })
    }
 
  }catch(err){
      res.status(404).json({
          status:"failed",
          message:err
      })
  }
})
module.exports = router;