import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
const config=require('./../../../../config/database.js')
@Injectable()
export class ProductService {
domain=config.domain;
  constructor(private http:Http) {

   }

   getCategories() : Observable<any>{
    //return this.db.list('/categories').valueChanges();
    return null;
  }
   
   saveProduct(product){
     //return this.db.list('/products').push(product)
   }

   

   create(product) { 
   // return this.db.list('/products').push(product);
  }

  getAll() : Observable<Response>{
    let url=this.domain+"product/getallproducts";
   //return this.db.list('/categories',).valueChanges();
   return this.http.get(url).map(
     response => {
       let body = response.json();
       console.log(body)
       return body || {};
     }
   
   )
   //return null;
  }
  
  get(productId):Observable<any> { 
    //return this.db.object('/products/' + productId).valueChanges();
    return null;
  }

  getProductByCategory(categoryname):Observable<Response> { 
    let url=this.domain+"product/getproductsbycategory/"+categoryname;
    //return this.db.list('/categories',).valueChanges();
    return this.http.get(url).map(
      response => {
        let body = response.json();
        return body || {};
      }
    
    )
  }
  update(productId, product) { 
    //return this.db.object('/products/' + productId).update(product);
    return null;
  }

  delete(productId) { 
    //return this.db.object('/products/' + productId).remove();
  }
}
