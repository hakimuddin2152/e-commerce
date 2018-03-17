import { Injectable } from '@angular/core';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
import { Http ,Headers} from '@angular/http';
import { Response } from '@angular/http/';
import { Category } from 'app/model/category';

@Injectable()
export class CategoryService {
categoryList:Category[]
  constructor(private http: Http) {

   }

   getAll() {
     let url="http://localhost:8080/category/getallcategories";
    //return this.db.list('/categories',).valueChanges();
    return this.http.get(url)
    .map(response=>{
      var res=response.json()
      var categories=<Category[]>response.json();
      return categories;
    })
    
 }
  saveCategory(category):Observable<Response>{
    console.log(category)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url="http://localhost:8080/category/addcategory";
    return this.http.post(url,category,{headers: headers})
    .map(res => res.json());
    }
    
  }
