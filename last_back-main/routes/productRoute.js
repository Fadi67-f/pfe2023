const express = require('express');

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImages,
  resizeProductImages,
  getGategoryProduct,
} = require('../services/productService');
const authService = require('../services/authService');




const router = express.Router();






router
  .route('/')
  .get(getProducts)
  .post(
    authService.protect,
    authService.allowedTo('admin'),
    uploadProductImages,
    resizeProductImages,
    createProduct
  ).patch(
    authService.protect,
    authService.allowedTo('admin'),
    uploadProductImages,
    resizeProductImages,
    updateProduct);
router
  .route('/:id')
  .get( 
     getProduct)
  
  .delete(
   authService.protect,
   authService.allowedTo('admin'),
    deleteProduct
  );
  router
  .route('/category/:id')
  .get( 
    getGategoryProduct)

module.exports = router;
