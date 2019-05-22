import { Component, OnInit } from '@angular/core';
import {
  ViewChild,
  OnsTab,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-tab1]',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
