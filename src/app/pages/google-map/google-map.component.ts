import { Component, AfterViewInit,  Renderer2,
  ElementRef,
  ViewChild,
  OnInit,
  Inject} from '@angular/core';

import { Router, Params } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { StreamingService } from 'src/app/services/streaming.service';
import { Streaming } from 'src/app/models/streaming.model';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'ons-page[app-google-map]',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements  AfterViewInit, OnInit {
  @ViewChild("map") mapElementRef: ElementRef;
 
  map : any;
  positionMarker: any;
  markers: any;
  subscription: any;
  selectedCoords: any;
  myLatLng : any;
  streamings: Streaming[];

  constructor(
    private streamingService: StreamingService,
    public authService: AuthService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
    ) { }

    ngOnInit(){
    }

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
      
             /* this.map.addListener("click", event => {
                this.selectedCoords = {
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                };
    
                console.log("selectedCoords : " + this.selectedCoords.lat + " // " + this.selectedCoords.lng);
              }); */
    
              this.positionMarker = new googleMaps.Marker({
                map: this.map,
                draggable: false,
                position: this.myLatLng,
                title: 'Vous êtes ici!'
              });

              this.streamingService.getStreamings().subscribe(data => {
                this.streamings = data.map(e => {
                  return {
                    category: e.payload.doc.get('category'),
                    eventName: e.payload.doc.get('eventName'),
                    userEmail: e.payload.doc.get('userEmail'),
                    userName: e.payload.doc.get('userName'),
                    geoLoc: {
                              lat : e.payload.doc.get('geoLoc.lat'),
                              long: e.payload.doc.get('geoLoc.long')
                            } 
                  } as Streaming;
                });
                
                for (let index = 0; index < this.streamings.length; index++) {
                    this.markers = new googleMaps.Marker({
                      map: this.map,
                      draggable: false,
                      position: {lat : this.streamings[index].geoLoc.lat, lng: this.streamings[index].geoLoc.long},
                      title: this.streamings[index].eventName
                    }); 
                    
                    this.markers.addListener("click", event => {
                      console.log("click"+index);
                      this.document.location.href = 'https://stream.mux.com/iCYj01LQF6JJzmsmv3aEqAxyKyxYrlMoS.m3u8';
                    }); 
                }
                
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
