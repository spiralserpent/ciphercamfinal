import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import {UserProvider} from '../../providers/user/user';

import {Users} from'../../shared/users'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  user:Users[];

  constructor(
    public navCtrl: NavController,
    public userService: UserProvider,
    @Inject('DbURL') private dbURL
  ) {

  }

  getProviderUser(){
    this.userService 
    .getUsers()
    .subscribe(
      response => {
        this.user=response;
        console.log(this.user);
      }
    )
  }


  

  getProviderUsers(){
    this.userService 
    .getUsers()
    .subscribe(
      response => {
        this.user=response;
        console.log(this.user);
      }
    )
  }

  ngOnInit(){
    this.getProviderUsers();
    }

}
