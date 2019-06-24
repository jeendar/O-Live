import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { AuthService } from '../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../../core/user.model';
import { HomeComponent } from '../home/home.component';
import { BroadcastComponent } from '../broadcast/broadcast.component';

@Component({
  selector: 'ons-page[page-user]',
  templateUrl: 'user.component.html',
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit{


  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    private router: Router,
    
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }


  goToMap(){
    console.log("map");
    this.router.navigate(['/map']);
  }
}
