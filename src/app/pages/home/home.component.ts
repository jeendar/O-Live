import { Component, OnInit } from '@angular/core';
import {
  ViewChild,
  OnsTab,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import { StreamingService } from 'src/app/services/streaming.service';
import { Streaming } from 'src/app/models/streaming.model';

@Component({
  selector: 'ons-page[app-tab1]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedOption: string;
  streamings: Streaming[];
  streamingsByCat: Streaming[];

  constructor(private streamingService: StreamingService) { }

  ngOnInit() {
    this.selectedOption = "Arts, Musique, Cinéma";

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
  }); 

  console.log(this.streamingService.getStreamingsByCategory('IT, Informatique'));
 

}

}
