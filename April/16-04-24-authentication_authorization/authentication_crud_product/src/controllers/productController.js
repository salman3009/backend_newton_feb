const productSchema = require('../models/productSchema');
const ProductSchema = require('../models/productSchema');

async function createProduct(req,res) {
    try {
        const product = new ProductSchema({
            productName: req.body.productName,
            price: req.body.price
        })
        let result = await product.save();
        res.status(201).json({
            status:"success",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


async function getProductById(id) {
    try {
        let result = await productSchema.findById(id);
        return result;
    } catch (err) {
        return err;
    }
}


async function getProduct(req, res) {
    try {
        let result = await productSchema.find();
        res.status(200).json({
            status: "success",
            result
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}



async function updateProductById(id, body) {
    try {
        let result = await productSchema.findByIdAndUpdate(id, body, { new: true });
        return result;
    } catch (err) {
        return err;
    }
}


async function deleteProductById(id) {
    try {
        let result = await productSchema.findByIdAndDelete(id);
        return result;
    } catch (err) {
        return err;
    }
}


module.exports = {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProduct
}