const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/cityName', async(req,res)=>{
    try{
     let result = await weatherController.getWeatherDetails();
     res.status(200).json({
        message:"success",
        data:{
            result
        }
     })

    }catch(err){
        res.status(404).json({
            message:"failed"
        })
    }
})

module.exports = router;