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

router.post('/cityName',async (req,res)=>{
    try{
      let {city,date,humidity} = req.body;
      let result = await weatherController.postWeatherDetails({city,date,humidity});
      res.status(200).json({
        status:"success",
        message:"weather alert saved successfully"
     })
    }catch(err){
        res.status(404).json({
            status:"failed"
        }) 
    }
})

module.exports = router;