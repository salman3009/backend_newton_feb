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


async function getProductById(req,res) {
    try {
        let result = await productSchema.findById(req.params.id);
        res.status(200).json({
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



async function updateProductById(req, res) {
    try {
        let result = await productSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
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


async function deleteProductById(req,res) {
    try {
        let result = await productSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"deleted successfully",
            result
         })
    } catch (err) {
        res.status(404).json({
            status:"failed",
            message:err
           })
    }
}


module.exports = {
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    getProduct
}