const express = require('express');
const router = express.Router();
const {createProduct,getProduct,getProductById,updateProductById,deleteProductById} = require('../controllers/productController');

router.post('/',createProduct);
router.get('/',getProduct);
router.get('/:id',getProductById);


router.patch('/:id',async (req,res)=>{
   try{
    let result = await updateProductById(req.params.id,req.body);
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


router.delete('/:id',async (req,res)=>{
   try{
    let result = await deleteProductById(req.params.id);
    res.status(200).json({
       status:"deleted successfully",
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