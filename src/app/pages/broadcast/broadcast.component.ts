import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {StreamingService} from "../../services/streaming.service";

@Component({
  selector: 'ons-page[app-tab2]',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit, AfterViewInit {
  private streaming: any;
  selectedOption: string;
  eventName : string;

  constructor(private http: HttpClient, private streamingService: StreamingService, private ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.eventName="";
    this.selectedOption = "Arts, Musique, Cinéma";
  }

  ngAfterViewInit(): void {
    this.fillStreaming("fillCalled");
  }

  saveStreaming() {
    this.streamingService.createStreaming(this.streaming)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }



  createStreaming() {
    console.log("createStreaming !!");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(environment.MUX_TOKEN_ID + ":" + environment.MUX_TOKEN_SECRET)
      })
    };

    let data = JSON.stringify(
      {
        playback_policy: "public",
        new_asset_settings:
          {
            playback_policy: "public"
          }
      }
    );

    this.http.post('https://api.mux.com/video/v1/live-streams', data, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }

  startStreaming() {
     console.log("startStreaming !");
     this.saveStreaming();
    // videoStreamer.streamRTMPAuth('rtmp://live.mux.com/app/28372226-3a35-bde4-3b8a-b70656dfd775',
    //   environment.MUX_TOKEN_ID,
    //   environment.MUX_TOKEN_SECRET,
    //   this.successStreaming, this.failedStreaming);
  }

  failedStreaming(err) {
    console.log(err);
  }

  successStreaming(res) {
    console.log(res);
  }

  fillStreaming(changedVal) {
    console.log(changedVal);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.streaming = {
          category: this.selectedOption,
          userName: this.ngFireAuth.auth.currentUser.displayName,
          userEmail: this.ngFireAuth.auth.currentUser.email,
          userId: this.ngFireAuth.auth.currentUser.uid,
          eventName: this.eventName,
          geoLoc: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        };
      });
    }
  }
}