const Product = require('../model/productModels');
const express = require('express');
const router = express.Router();

router.post('/products', async (req, res) => {
  const newProduct = req.body;

  try {
    const createdProduct = await Product.create(newProduct);

    res
      .status(201)
      .json({ message: 'Product created', product: createdProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID in the database
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.patch('/products/:id', async (req, res) => {
  const ProductId = req.params.id;
  const updatedProductData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      ProductId,
      updatedProductData,
      {
        new: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res
      .status(200)
      .json({ message: 'Product updated', product: updatedProductData });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID and delete them
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
