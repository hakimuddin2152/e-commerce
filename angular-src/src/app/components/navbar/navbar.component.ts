import { Observable } from 'rxjs/Observable';
import { Location } from './../../model/location';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLocation;
  cordinates={
    "latitude":'18.6004461',
    "longitude":'73.8231716'
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private location : LocationService,
    private flashMessage: FlashMessagesService) { 
    // navigator.geolocation.getCurrentPosition(function(a){
    //   if(confirm('This site wants your location')){
    //     this.location.getLocation(a)
    //   }
      
    // })
      
    }

  ngOnInit() {
    this.location.getLocation(this.cordinates).subscribe(data => {
      this.userLocation=data[0]
      console.log(this.userLocation.extra.premise,',' , this.userLocation.city)
    }) 
  }

  callLocation(){
   
      
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }
}
