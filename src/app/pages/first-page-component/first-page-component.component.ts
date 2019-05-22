import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SecondPageComponent } from '../second-page/second-page.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ons-page[first]',
  templateUrl: './first-page-component.component.html',
  styleUrls: ['./first-page-component.component.css']
})
export class FirstPageComponentComponent implements OnInit {

  constructor(private navigator: OnsNavigator, private http: HttpClient) { }

  ngOnInit() {
  }

  push() {
    // Push SecontPageComponent to `ons-navigator
    this.navigator.element.pushPage(SecondPageComponent, {data: {val: 1234}});
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
    // console.log("startStreaming !");
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


}
