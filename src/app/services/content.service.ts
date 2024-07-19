import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../models/Content';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  apiUrl: string = 'http://localhost:8080/api/content';
  constructor(private http: HttpClient) { }


  sendContent(formData: FormData): Observable<Content>{
   console.log("sending data")
    return this.http.post<Content>(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );;
  }

  getContentList():Observable<Content[]>{
     return this.http.get<Content[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
