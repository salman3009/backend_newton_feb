const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router.get('/', async(req,res)=>{
    try{
     let data = await tourController.getTourDetails();
     res.status(200).json({
         data
     })

    }catch(err){
        res.status(404).json({
            status:"failed"
        })
    }
})

router.post('/',async (req,res)=>{
    try{
      let {name,description,duration,price} = req.body;
      console.log("post method");
      let result = await tourController.postTourDetails({name,description,duration,price});
      res.status(200).json({
        "message": "Tour added successfully"
     })
    }catch(err){
        res.status(404).json({
            status:"failed"
        }) 
    }
})


router.delete('/:id',async (req,res)=>{
    try{
      let {id} = req.params;
      let result = await tourController.deleteTourDetails(id);
      res.status(200).json({
        "message": "Tour deleted successfully"
     })
    }catch(err){
        res.status(404).json({
            status:"failed"
        }) 
    }
})
module.exports = router;