const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/',async (req,res)=>{
    try{
     let result = await productController.createProduct(req.body);
     res.status(201).json({
        status:"success",
        result
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
    let result = await productController.getProductById(req.params.id);
    res.status(200).json({
       status:"success",
       result
    })
   }catch(err){
      res.status(404).json({
       status:"failed",
       message:err
      })
   }
})


router.patch('/:id',async (req,res)=>{
   try{
    let result = await productController.updateProductById(req.params.id,req.body);
    res.status(200).json({
       status:"success",
       result
    })
   }catch(err){
      res.status(404).json({
       status:"failed",
       message:err
      })
   }
})

module.exports = router;