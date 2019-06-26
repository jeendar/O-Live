import { Component, OnInit } from '@angular/core';
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
  streamingsF: Array<Streaming>;
  streamingsByCat: Array<Streaming>;
  

  constructor(private streamingService: StreamingService) { 
    this.streamingsByCat = new Array<Streaming>();
    this.streamingsF = new Array<Streaming>();
  }

  ngOnInit() {
      this.getAllStreamings();
}

  getAllStreamings() {
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
      this.streamings.forEach((strm) => {
           this.streamingsF.push(strm);            
      });
    });
  
  }

  getStreamingsByCat(changedVal) {
    this.streamings = [];
    this.streamingsByCat = [];
    this.streamingsF.forEach((strm) => {
      if(changedVal === 'Sélectionner tout'){
        this.streamings = this.streamingsF;
      }else if(changedVal === strm.category){
         this.streamingsByCat.push(strm);            
      }
    });
  }

}
