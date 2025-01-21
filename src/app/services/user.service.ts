import { Injectable } from '@angular/core';
import { servicesVersion } from 'typescript';
import { ServiceService } from './service.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceService {
  path: string = '/auth';
  url = this.baseUrl+this.path;
  currentUserName!:string;
  constructor(private http: HttpClient, router:Router) {
    super(router);
  }

  public register(user:User):Observable<any>{
    return this.http.post<any>(this.url+"/signUp", user).pipe(catchError(this.customHandleError));
  }

  public login(username:string, password:string): Observable<any>{
    return this.http.post<any>(`${this.url}/login`,{username:username,password:password}).pipe(catchError(this.handleError));
  }

  public setToken(token:string){
    localStorage.setItem('token',token);
  }

  public getToken():string | null{
    return localStorage.getItem('token');
  }

  public fetchCurrentUser(): Observable<any> | null{
    if(!localStorage.getItem('token')) return null;
    return this.http.get<string>(`${this.baseUrl}/user/current`)
  }

  public getCurrentUser():string | null{    
    return this.currentUserName;
  }

 
}
