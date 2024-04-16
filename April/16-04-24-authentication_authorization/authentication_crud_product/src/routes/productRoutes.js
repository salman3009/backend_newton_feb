const express = require('express');
const router = express.Router();
const {createProduct,getProduct,getProductById,updateProductById,deleteProductById} = require('../controllers/productController');

router.post('/',createProduct);
router.get('/',getProduct);
router.get('/:id',getProductById);
router.patch('/:id',updateProductById);
router.delete('/:id',deleteProductById);

module.exports = router;