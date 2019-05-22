import { Component, OnInit } from '@angular/core';
import {OnsNavigator, Params} from 'ngx-onsenui';
import {FirstPageComponentComponent} from "../first-page-component/first-page-component.component";


declare let cordova: any;
declare let navigator: any;

var _self;

@Component({
  selector: 'ons-page[second]',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  public base64Image: String;
  public photos;
  public text;

  constructor(private params: Params, private navigator: OnsNavigator) {
    console.log(JSON.stringify(params.data));
    _self = this;

  }

  ngOnInit() {
  }


  pop() {
    // pop SecontPageComponent to `ons-navigator
    this.navigator.element.pushPage(FirstPageComponentComponent, {data: {val: 9999}});

  }

  takePic() {
    console.log(cordova);
    console.log(navigator);


    let pictureParams = {
      destinationType: navigator.camera.DestinationType.FILE_URI,
      targetWidth: 500,
      targetHeight: 500,
      mediaType: navigator.camera.MediaType.VIDEO
    };

    navigator.camera.getPicture(SecondPageComponent.cameraSuccess, SecondPageComponent.cameraError, pictureParams);
  }

  static cameraSuccess(imageData) {
    // imageData is a base64 encoded string
    console.log("cameraSuccess");
    _self.base64Image = "data:image/jpeg;base64," + imageData;
  }

  static cameraError(err) {
    console.log("cameraError");
    console.log(err);

  }
}
