import { Injectable } from '@angular/core';
import { servicesVersion } from 'typescript';
import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceService {
  path: string = '/auth';
  url = this.apiUrl+this.path;
  constructor(private http: HttpClient) {
    super();
  }

  public addUser(user:User):Observable<number>{
    return this.http.post<number>(this.url+"/signUp", user).pipe(catchError(this.handleError));
  }

  public login(username:string, password:string): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/auth/login',{username:username,password:password}).pipe(catchError(this.handleError));
  }

  public setToken(token:string){
    localStorage.setItem('token',token);
  }

  public getToken():string | null{
    return localStorage.getItem('token');
  }
}
