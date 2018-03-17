const express = require('express');
const productRoutes = express.Router();
const config = require('../config/database');
const Product = require('../models/product');
console.log
productRoutes.route('/addproduct').post(function (req, res) {
  console.log("hello product")
  let newProduct = new Product ({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageUrl:req.body.imageUrl
  });


  Product.addProduct(newProduct,(err, product) => {
    console.log("inside product function")
    if(err) {
      res.json({success: false, msg: 'Failed to add category'});
    } else {
      res.json({success: true, msg: 'Product added'});
    }
  })
  
});
  
productRoutes.route('/getallproducts').get(function (req, res) {
  Product.getAllProducts((err,products) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get category list'});
    } else {
      res.json(products);
    }
  });
}); 

productRoutes.route('/getproductsbycategory/:category').get(function (req, res) {
  Product.getProductsByCategory(req.params.category,(err,products) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get product list'});
    } else {
      res.json(products);
    }
  });
}); 

productRoutes.route('/updateProduct/:product_id').put(function (req, res) {
console.log('update method')
  Product.getProductById(req.params.product_id, function (err, prod) {
      if (err) {
          res.send(err);
      }
      prod.category = req.body.category;
      prod.description = req.body.description;
      prod.title = req.body.title;
      prod.price = req.body.price;
      prod.imageUrl=req.body.imageUrl
      prod.save(function (err) {
          if (err)
              res.send(err);

          res.json({ message: 'Product updated!' });
      });

  });
});

module.exports = productRoutes;
