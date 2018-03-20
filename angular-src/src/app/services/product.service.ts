import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '@angular/http';
import { Product } from 'app/model/product';
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
    console.log(product)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url=this.domain+"product/addproduct";
    return this.http.post(url,product,{headers: headers})
    .map(res => res.json());
    }
    
   

   

   create(product) { 
   // return this.db.list('/products').push(product);
  }

  getAll() {
    let url=this.domain+"product/getallproducts";
   //return this.db.list('/categories',).valueChanges();
   return this.http.get(url)
   .map(response=>{
    var res=response.json()
    var categories=<Product[]>response.json();
    return categories;
  })
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

  deleteProduct(productId) { 
    console.log(productId)
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url=this.domain+"product/deleteproduct/"+productId;
      return this.http.delete(url,{headers: headers})
      .map(res => 
        {
          console.log(res.json())
        res.json()
        });
      }
  
}
