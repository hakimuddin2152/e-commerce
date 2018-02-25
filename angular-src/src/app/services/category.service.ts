import { Injectable } from '@angular/core';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

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
    //return null;
   }

}
