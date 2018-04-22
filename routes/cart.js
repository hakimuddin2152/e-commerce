

const express = require('express');
const cartRoutes = express.Router();
const config = require('../config/database');
const Cart = require('../models/cart');
const randomstring = require("randomstring");

cartRoutes.route('/createShoppingCart').post(function(req,res){

    // var cartId=randomstring.generate({
    //     length: 12,
    //     charset: 'alphabetic'
    //   });
  
  cartId='hakimtest'
    let shoppingcart=new Cart({
          cartId:cartId,

      })
      Cart.save((err) => {
        if (err) {
          res.json({ success: false, msg: 'Failed cart' });
        } else {
            res.json({ success: false, msg: 'Success cart' });
        }
      })

      Cart.findOne(cartId,function(err,cart){
        if (err) {
            res.json({ success: false, msg: 'Faile to return cart' });
          } else {
              res.json(cart.cartId);
          }
      })
      

})
    



module.exports=cartRoutes

