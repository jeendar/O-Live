import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { BroadcastComponent } from '../pages/broadcast/broadcast.component';
import { UserComponent } from '../pages/user/user.component';
import { GoogleMapComponent } from '../pages/google-map/google-map.component';
import { NotifComponent } from '../pages/notif/notif.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  home = HomeComponent;
  streaming = BroadcastComponent;
  user = UserComponent;
  map = GoogleMapComponent;
  notif = NotifComponent;
  constructor() { }

  ngOnInit() {
  }

}
