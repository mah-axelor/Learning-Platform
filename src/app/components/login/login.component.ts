import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!:string;
  password!:string;
  constructor(private router: Router, private userService:UserService){}

  public navigateToRegister(){
this.router.navigate(["/register"]);
  }

  public login(){
    this.userService.login(this.username,this.password).subscribe({
      next: (tokenJson:{token:string}) => {        
        this.userService.setToken(tokenJson.token);        
        this.router.navigate(['/myCourses']).then(()=>location.reload()); 
             
      },

      error: e=>console.error("error:",e)    
    })
  }
}
