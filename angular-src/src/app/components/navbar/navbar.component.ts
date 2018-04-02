import { ProductsComponent } from 'app/components/products/products.component';
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
    latitude:'',
    longitude:''
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private location : LocationService,
    private flashMessage: FlashMessagesService) { 
      var self=this
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
        self.cordinates={
          latitude:position.coords.latitude.toString(),
          longitude:position.coords.longitude.toString()
        }
        self.location.getLocation(self.cordinates).subscribe(data => {
        console.log(data) 
          self.userLocation=data[0]
          console.log(self.userLocation.extra.premise,',' , self.userLocation.city)
        })
      })
    }

  ngOnInit() {
 
    
    
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
