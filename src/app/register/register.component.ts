import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { UserStatus } from '../models/UserStatus';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    statusSelect: UserStatus.STUDENT
  };
  confPassword:string ="";
  userExist:boolean = false;
  constructor(private userService:UserService){}

  public register(){
    this.userService.addUser(this.user).subscribe({
      next: id => localStorage.setItem("userId",id.toString()),// should redirect to home page
      error: () =>this.userExist = true
    });
  }

}
