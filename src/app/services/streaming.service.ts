import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor(private firestore: AngularFirestore) {
  }


  createStreaming(streaming: any) {
    return this.firestore.collection('Streamings').add(Object.assign({}, streaming));
  }
}
