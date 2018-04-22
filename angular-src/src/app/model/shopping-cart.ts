import { AuthService } from './../services/auth.service';
import { Product } from './product';
import { AppUser } from 'app/model/app-user';

export class ShoppingCart { 
  cartId:string;
  itemMap: Map<String,number>;
  Products:Product[];
  cartTotal:number;
  constructor(){
  this.cartId;
  this.itemMap=new Map<String,number>()
  }  

  getCartTotal(){
    this.Products.forEach(p => {
      var count=this.itemMap.get(p._id)
       this.cartTotal=this.cartTotal+(p.price*count);
    });
     return this.cartTotal;
  }
}

