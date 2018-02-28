var mongoose     = require('mongoose');
const config = require('../config/database');
var ProductSchema   = mongoose.Schema({
    category: String,
    title: String,
	description: String,
    price: Number,
    imageUrl : String ,
});
const Product = module.exports = mongoose.model('Product', ProductSchema);
// module.exports = mongoose.model('Product', ProductSchema,'optiponally pass schema name ');

module.exports.getAllProducts = function(callback) {
    Product.find(callback);
  }
  
  module.exports.addProduct = function(product, callback) {
    product.save(callback)
    
  }