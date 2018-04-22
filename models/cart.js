const mongoose     = require('mongoose');
const config = require('../config/database');
const Product = require('../models/product');
const CartSchema   = mongoose.Schema({
	cartId: String,
	ItemMap:[{
		Key:String,
		Value:Number
	}],
	Products:[{
		title:String,
	}]
});


const Cart=module.exports = mongoose.model('Cart', CartSchema);


