import { Component, OnInit } from '@angular/core';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { UserComponent } from '../pages/user/user.component';
import { NotifComponent } from '../pages/notif/notif.component';

import { GoogleMapComponent } from '../pages/google-map/google-map.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  home = Tab1Component;
  streaming = Tab2Component;
  user = UserComponent;
  map = GoogleMapComponent;
  notif = NotifComponent;
  constructor() { }

  ngOnInit() {
  }

}
