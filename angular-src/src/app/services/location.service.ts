import { Location } from './../model/location';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http ,Headers} from '@angular/http';
import { Response } from '@angular/http/';
const config=require('./../../../../config/database.js') 

@Injectable()
export class LocationService{

   domain=config.domain;
   @Input() userLocation :Location;
   
    url=this.domain+"location/getlocation";
    constructor(private http :Http){
        
     }

    getLocation(cordinates):Observable<Response>{
        console.log('location service called successfully')
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url,cordinates,{headers:headers})
        .map(res => res.json())
    }
}