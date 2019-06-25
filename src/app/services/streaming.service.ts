import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class StreamingService {
  
  streamingsByCat : any;

  constructor(private firestore: AngularFirestore) {
  }


  createStreaming(streaming: any) {
    return this.firestore.collection('Streamings').add(Object.assign({}, streaming));
  }

  getStreamings() {
    return this.firestore.collection('Streamings').snapshotChanges();
  }

  getStreamingsByCategory(category : string) {
    this.streamingsByCat = this.firestore.collection('Streamings', ref => ref.where('category','==', category )).valueChanges();

    return this.streamingsByCat;
  }

}
