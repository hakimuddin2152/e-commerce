const mongoose     = require('mongoose');
const config = require('../config/database');

const CategorySchema   = mongoose.Schema({
	title: String,
	key: String,
	featured: String,
  imageUrl : String
});
const Category=module.exports = mongoose.model('Category', CategorySchema);


module.exports.getCategoryByKey=function(id,callback){
  Category.findById(id,callback)
}
module.exports.getAllCategories = function(callback) {
  Category.find(callback);
}

module.exports.addCategory = function(category, callback) {
  category.save(callback)
 }

module.exports.deleteCategory=function(key,callback){
  const query = {_id: key}
  Category.deleteOne(query,callback)
}


