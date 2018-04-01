import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http ,Headers} from '@angular/http';
import { Response } from '@angular/http/';
import { Category } from 'app/model/category';

const config=require('./../../../../config/database.js') 
@Injectable()
export class CategoryService {
categoryList:Category[]
domain=config.domain;
  constructor(private http: Http) {

   }
   
   getAll() {
     
     let url=this.domain+"category/getallcategories";
    //return this.db.list('/categories',).valueChanges();
    return this.http.get(url)
    .map(response=>{
      var categories=<Category[]>response.json();
      return categories;
    })
    
 }
  saveCategory(category):Observable<Response>{
    console.log(category)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url=this.domain+"category/addcategory";
    return this.http.post(url,category,{headers: headers})
    .map(res => res.json());
    }
    

    deleteCategory(categoryKey):Observable<Response>{
      console.log(categoryKey)
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url=this.domain+"category/deletecategory/"+categoryKey;
      return this.http.delete(url,{headers: headers})
      .map(res => res.json());
      }
  }
