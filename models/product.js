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
  module.exports.getProductsByCategory=function(category,callback){
    const query = {category: category}
    Product.find(query, callback);
  }

  
  module.exports.getProductById = function(id, callback) {
    product.findById(callback)
    
  }