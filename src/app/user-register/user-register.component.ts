import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;
  userNameError = false;
  passwordError = false;
  passwordMatchError = false;
  emailError = false;

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  userValueChanged() {
    if(this.model.userName.length > 3) {
      this.userNameError = false;
    } else {
      this.userNameError = true;
    }
  }

  passwordChanged() {
    this.passwordError = this.model.password.length < 6;
      
    // this.passwordMatchError = this.model.password != this.retypePassword;

    if(this.model.password == this.retypePassword) {
      this.passwordMatchError = false;
    }
    else {
      this.passwordMatchError = true;
    }
   
  }

  emailChanged() {
    if (this.model.email.length < 8 || !this.model.email.includes('@')) {
      this.emailError = true;
    } else {
      this.emailError = false;
    }
  }


  registerUser() {

    console.log("Hey, you pushed my button");
    console.log(this.model);

    var isThereAnError = false;
    
    if (!this.model.userName) {
      this.userNameError = true;
      isThereAnError = true;
      
    }

    if (!this.model.password) {
      this.passwordError = true;
      isThereAnError = true;
     
    }

    
    if (isThereAnError || this.passwordMatchError) {
      return;
    }

    if (!this.model.email) {
      this.emailError = true;
      isThereAnError = true;
    }



    this.data.saveUser(this.model);

    this.model = new User();
    this.retypePassword = "";
  }
}
