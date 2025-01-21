import { E } from '@angular/cdk/keycodes';
import { HttpClient, HttpErrorResponse, HttpStatusCode, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl: string = 'http://localhost:8080/api';
  constructor(protected router:Router) { }

  protected handleError(error: HttpErrorResponse) {
    console.log("EBODY:",error.error)
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if(error.status === HttpStatusCode.Unauthorized) {      
      this.router.navigate
    
    }
    return throwError(errorMessage);
  }

  protected customHandleError(error: HttpErrorResponse) {    
    
    return throwError(error.error);
  }
}
