const ProductSchema = require('../models/productSchema');

async function createProduct(data){
    try{
        const product = new ProductSchema({
            productName:data.productName,
            price:data.price
        })
        let result =await product.save();
        return result;
    }catch(err){
        return err;
    }
}

module.exports={
    createProduct
}