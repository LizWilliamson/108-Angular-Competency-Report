import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() { 
    // create a default/admin user
    var user = new User();
    user.userName = "Admin";
    user.password = "password";

    this.users.push(user);
  }

  public sayHello() {
    console.log("Hello from the other side.....of the service");
  }

  public saveUser(theNewUser) {
    this.users.push(theNewUser);
  }

  public getAllUsers() {
    return this.users;
  }
}
