import { Injectable } from '@angular/core';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
import { Http ,Headers} from '@angular/http';
import { Response } from '@angular/http/';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {

   }

   getAll() : Observable<Response>{
     let url="category/getallcategories";
    //return this.db.list('/categories',).valueChanges();
    return this.http.get(url).map(
      response => {
        let body = response.json();
        return body || {};
      }
    
    )

  }
  saveCategory(category):Observable<Response>{
    console.log(category)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url="category/addcategory";
    return this.http.post(url,category,{headers: headers})
    .map(response=>response.json())
   
   
  
 }

}
