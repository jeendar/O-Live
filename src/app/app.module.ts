import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnsenTestComponent } from './onsen-test/onsen-test.component';

@NgModule({
  declarations: [
    AppComponent,
    OnsenTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
