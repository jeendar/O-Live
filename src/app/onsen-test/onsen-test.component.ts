import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';
@Component({
  selector: 'app-onsen-test',
  templateUrl: './onsen-test.component.html',
  styleUrls: ['./onsen-test.component.css']
})
export class OnsenTestComponent implements OnInit {
  title:string = 'My app';
  constructor() {

   }

  ngOnInit() {

  }
  ale() {
    ons.notification.alert('Hello, world!');
  }

}





