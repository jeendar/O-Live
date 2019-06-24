import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';


import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/login/login.component';

import { AngularFireModule } from '@angular/fire';
//import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';


import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { UserResolver } from './pages/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './pages/google-map/google-map.component';
import { HomeComponent } from './pages/home/home.component';
import { BroadcastComponent } from './pages/broadcast/broadcast.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotifComponent } from './pages/notif/notif.component';
import { EditInfoComponent } from './pages/user/edit-info/edit-info.component';

import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    GoogleMapComponent,
    HomeComponent,
    BroadcastComponent,
    TabsComponent,
    NotifComponent,
    EditInfoComponent,
  ],


  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    OnsenModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, { provide: FirestoreSettingsToken, useValue: {} }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, BroadcastComponent, NotifComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
