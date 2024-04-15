const express = require('express');
const fs = require("fs");
const app = express();
var products   =require("../models/product.js");
const products_data = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));

//Router Middlewares
app.use(express.json());

app.get("/:id",function(req,res){

    var id = req.params.id;
    var name, Price, Quantity,instock;

    for(var i=0;i<products_data.length;i++){

        if(products_data[i]["p_id"] == id){

            name = products_data[i]["name"];
            Price = products_data[i]["price"];
            Quantity = products_data[i]["Quantity"];
            instock = products_data[i]["instock"];
        }
    }

    var newproduct = {
        "name":name,
        "Quantity":Quantity,
        "Price": Price,
        "instock": instock
    };

    res.send(newproduct);

});
module.exports = app;
