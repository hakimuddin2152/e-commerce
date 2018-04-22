import { Http } from '@angular/http';
import { ShoppingCart } from './../model/shopping-cart';
import { Injectable, Input, Output } from '@angular/core';
import { Product } from '../model/product';
import { randomBytes } from 'crypto';
const config=require('./../../../../config/database.js')
@Injectable()
export class ShoppingCartService {
  cart:ShoppingCart
  domain=config.domain;
  constructor(private http:Http) {
    
   }
  
   createShoppingCart(){
    this.cart=new ShoppingCart()
    let url=this.domain+"cart/createShoppingCart";
    this.http.get(url).map(response=>{
      this.cart=<ShoppingCart>response.json();
    })
    return this.cart;
  }
  
   addItem(productId){
     console.log(productId)
     var count =this.cart.itemMap.get(productId)
      if(count>0)
        this.cart.itemMap.set(productId,++count)
      else
        this.cart.itemMap.set(productId,1);
        console.log(this.cart.itemMap.get(productId))
    return this.cart.itemMap.get(productId)

  }

  removeItem(productId){
    var count =this.cart.itemMap.get(productId)
     if(count>0)
    this.cart.itemMap.set(productId,--count)
    else
    this.cart.itemMap.set(productId,0);

    return this.cart.itemMap.get(productId)
  }
  

  }
