import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../../models/User';
import { UserStatus } from '../../models/UserStatus';
import { UserService } from '../../services/user.service';

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
  constructor(private userService:UserService, private router: Router){}

  public register(){
    this.userService.register(this.user).subscribe({
      next: (response: {token:string}) => {        
       console.log("response:",response)
      if(response?.token)  this.userService.setToken(response.token)
      this.router.navigate(['/courses'])
      },
      error: (body:{code:number, message:string}) =>{
        console.log(body)
        if(body.code===1) this.userExist = true
        else this.userExist = false;
      }
    });
  }

}
