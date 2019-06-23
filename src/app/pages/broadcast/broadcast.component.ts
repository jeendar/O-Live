import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ons-page[app-tab2]',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
