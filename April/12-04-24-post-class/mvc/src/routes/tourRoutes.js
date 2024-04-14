const express = require('express');
const router = express.Router();
const tourController =require('../controllers/tourController');

router.get('/',async(req,res)=>{
    try{
      let data = await tourController.getTourDetails();
      res.status(200).json({
        status:"success",
        data
      })
    }catch(err){
        res.status(404).json({
            status:failed,
            message:err.mesage
        })
    }
})


router.get('/:id',async(req,res)=>{
  try{
    let data = await tourController.getTourDetails(id);
    res.status(200).json({
      status:"success",
      data
    })
  }catch(err){
      res.status(404).json({
          status:failed,
          message:err.mesage
      })
  }
})
module.exports = router;