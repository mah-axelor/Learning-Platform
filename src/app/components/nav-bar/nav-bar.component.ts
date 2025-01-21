import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  currentUsername!:string;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.fetchCurrentUser()?.subscribe({
      next: (data:{firstName:string}) => {
        this.currentUsername = data.firstName;
        this.userService.currentUserName = data.firstName;
      },  
      error: e => console.error(e)    
    })
  }

  logOut(){
    localStorage.removeItem('token');
    location.reload()
  }

}
