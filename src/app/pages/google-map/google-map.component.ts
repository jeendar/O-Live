import { Component, AfterViewInit,  Renderer2,
  ElementRef,
  ViewChild} from '@angular/core';

import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'ons-page[app-google-map]',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements  AfterViewInit {
  @ViewChild("map") mapElementRef: ElementRef;
 
  map : any;
  markers: any;
  subscription: any;
  lat : number;
  lng : number;
  selectedCoords: any;
  myLatLng : any;

  constructor(
    public authService: AuthService,
    private renderer: Renderer2
    ) { }

    ngAfterViewInit() {
      this.getGoogleMaps()
        .then(googleMaps => {
          const mapEl = this.mapElementRef.nativeElement;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              this.myLatLng = new googleMaps.LatLng( position.coords.latitude, position.coords.longitude);
              
              console.log(this.myLatLng);

              this.map = new googleMaps.Map(mapEl, {
                center: this.myLatLng,
                zoom: 15
              });
      
              googleMaps.event.addListenerOnce(this.map, "idle", () => {
                this.renderer.addClass(mapEl, "visible");
              });
      
              this.map.addListener("click", event => {
                this.selectedCoords = {
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                };
    
                console.log("selectedCoords : " + this.selectedCoords.lat + " // " + this.selectedCoords.lng);
              });
    
              this.markers = new googleMaps.Marker({
                title: 'Vous êtes ici!',
                map: this.map,
                draggable: false,
                position: this.myLatLng
              });

           });
         }
        })
        .catch(err => {
          console.log(err);
        });
    }  
    
  
    private getGoogleMaps(): Promise<any> {
      const win = window as any;
      const googleModule = win.google;
      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJe79GK9TneKergO80KLPGVrwf6FbP4s";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          const loadedGoogleModule = win.google;
          if (loadedGoogleModule && loadedGoogleModule.maps) {
            resolve(loadedGoogleModule.maps);
          } else {
            reject("Google maps SDK not available.");
          }
        };
      });
    }

}
