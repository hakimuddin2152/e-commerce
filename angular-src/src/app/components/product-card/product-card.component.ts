import { ShoppingCart } from './../../model/shopping-cart';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../model/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  @Input('product') product;
  relativePath='./../../../../assets/img/'
    cart:ShoppingCart
    constructor(private shoppingCart:ShoppingCartService) {
    this.cart = this.shoppingCart.createShoppingCart()
    console.log(this.cart.cartId);
    console.log(this.cart.itemMap)
    }

    getQuantity(){
      this.updateCart()
      console.log(this.cart.itemMap.get(this.product._id))
      if(this.cart.itemMap.get(this.product._id))
      return this.cart.itemMap.get(this.product._id)
      else return 0;
    }

    updateCart(){
      this.cart=this.shoppingCart.cart;
    }

    removeFromCart(){
      this.shoppingCart.removeItem(this.product._id);
      return this.getQuantity()
    }

    addToCart(){
      this.shoppingCart.addItem(this.product._id);
      return this.getQuantity()
    }
}
