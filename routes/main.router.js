const express = require('express');
const productController = require('../modules/product/product.controller');
const cartController = require('../modules/cart/cart.controller');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.get('', function(req, res) {
    res.json({ status: 1 });
  });

  mainRouter.get('/products', function(req, res) {
      productController.getAllProducts(req, res);
    });

    mainRouter.get('/product/:id', function(req, res) {
        productController.getProduct(req, res);
    });

    mainRouter.put('/product', function(req, res) {
        productController.addProduct(req, res);
    });

    mainRouter.get('/cart/:user_id', function(req, res) {
        cartController.getCart(req, res);
    });


module.exports = mainRouter;