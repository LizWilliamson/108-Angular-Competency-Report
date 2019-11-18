import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/User';

import { Router } from '@angular/router'
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userList: User[] = [];

  userName: string = '';
  password: string = '';

  userNameError = false;
  passwordError = false;
  loginFailed = false;


  constructor(private data : DataService, private router: Router, private shared : SharedService) { 
    this.userList = data.getAllUsers();
  }

  userChanged(){
    if(this.userName) this.userNameError = false;
    else this.userNameError = true;
  }

  passwordChanged(){
    if (this.password) this.passwordError = false;
    else this.passwordError = true;
  }

  login() {
    // validate username and password
    console.log("Hey, you pressed my button");
    var missingInfo = false;
    if (!this.userName) {
      missingInfo = true;
      this.userNameError = true;
    }

    if (!this.password) {
      missingInfo = true;
      this.passwordError = true;
    }

    if (missingInfo) return;

    // compare user name and password with those of the user list

    // *logic --> travel userList array --> get each element --> compare --> if match, hide login button, else show error
    var credsCorrect = false;
    for(var i=0; i<this.userList.length; i++){
      var user = this.userList[i];

      if(user.userName == this.userName && user.password == this.password){
        console.log("By George, I think you've done it");
        credsCorrect = true;
        this.loginFailed = false;
        this.shared.isUserLoggedIn = true;

        // if successful, send user to another page
        this.router.navigate(['about']);
      }
    }
    if(!credsCorrect){
      console.log("It appears somebody doesn't know their name and/or their password. HaHaHa fool")
      this.loginFailed = true;
    }
    
  }


}
