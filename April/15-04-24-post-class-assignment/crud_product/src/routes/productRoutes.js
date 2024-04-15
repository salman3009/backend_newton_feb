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

module.exports = router;