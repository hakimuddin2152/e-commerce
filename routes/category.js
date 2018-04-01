const express = require('express');
const categoryRoutes = express.Router();
const config = require('../config/database');
const Category = require('../models/category');


categoryRoutes.route('/addcategory').post(function (req, res) {

    let newCategory = new Category({
    key: req.body.key,
    title: req.body.title,
    featured: req.body.featured,
    imageUrl: req.body.imageUrl
  });
  console.log(req.body)
  console.log('new category'+newCategory)
  Category.addCategory(newCategory, (err, cat) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to add category' });
    } else {
      res.json({ success: true, msg: 'Category added' });
    }
  })

});

categoryRoutes.route('/getallcategories').get(function (req, res) {
  console.log('get all category api')
  Category.getAllCategories((err, cat) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get category list' });
    } else {
      res.json(cat);
    }
  });

});

categoryRoutes.route('/updatecategory/:category').put(function (req, res) {
  let categoryId = req.params.id;
  if (categoryId != null) {
    Category.getCategoryByKey(categoryId, (err, category) => {
      if (err)
        res.send(err)
      else {
        category.key = req.body.key;
        category.title = req.body.title;
        category.featured = req.body.featured;
        category.imageUrl = req.body.imageUrl;
        Category.save(function (err) {
          if (err)
            res.send(err);

          res.json({ message: 'Category updated!' });
        });
      }
    })
  }
});

categoryRoutes.route('/deletecategory/:key').delete(function (req, res) {
  let categoryKey = req.params.key;
  console.log(req.params.key)
  if (categoryKey != null) {
    Category.deleteCategory(categoryKey, (err, category) => {
      if (err)
        res.send(err)
      else {
        res.send('Category deleted')
      }

    })
  }
})


module.exports = categoryRoutes;
