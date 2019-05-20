import { Component, OnInit, OnDestroy} from '@angular/core';
//import { GeoService } from '../geo.service';
import { Location } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;

  markers: any;
  subscription: any;

  constructor(
    private location : Location,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
    ) { } //private geo: GeoService

  ngOnInit() {
    this.getUserLocation();
   /* this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits); */
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe() 
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        console.log(this.lat);
        console.log(this.lng);
        
      //  this.geo.getLocations(100, [this.lat, this.lng]);
      });
    }
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
  
  goToProfile(){
    console.log("Profile");
    this.router.navigate(['/user']);
  }

}
