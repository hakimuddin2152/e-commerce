const express = require('express');
const categoryRoutes = express.Router();
const config = require('../config/database');
const Category=require('../models/category');


categoryRoutes.route('/addcategory').post(function (req, res) {
	console.log("inside category")
    let newCategory = new Category({
    title :req.body.title,
    key :req.body.key,
    featured : req.body.featured,
    imageUrl : req.body.imageUrl
	});
	
	Category.addCategory(newCategory,(err, cat) => {
      if(err) {
        res.json({success: false, msg: 'Failed to add category'});
      } else {
        res.json({success: true, msg: 'Category added'});
      }
    })
    
});

categoryRoutes.route('/getallcategories').get(function (req, res) {
  console.log('get all category api')
    Category.getAllCategories((err, cat) => {
      if(err) {
        res.json({success: false, msg: 'Failed to get category list'});
      } else {
        res.json(cat);
      }
    });
}); 

module.exports = categoryRoutes;
 