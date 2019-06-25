import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserResolver } from './pages/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { GoogleMapComponent } from './pages/google-map/google-map.component';
import { TabsComponent } from './tabs/tabs.component';
import { EditInfoComponent } from './pages/user/edit-info/edit-info.component';
import { SettingsComponent } from './pages/user/settings/settings.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'map', component: GoogleMapComponent, resolve: { data: UserResolver}},
  { path: 'tabs', component: TabsComponent,  resolve: { data: UserResolver}},
  { path : 'edit', component : EditInfoComponent },
  { path : 'settings', component : SettingsComponent },

];
