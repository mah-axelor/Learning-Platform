import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../models/Content';
import { catchError, Observable, throwError } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends ServiceService {
 
  path: string = '/content';
  url = this.apiUrl+this.path;
  constructor(private http: HttpClient) {
    super();
  }


  sendContent(formData: FormData): Observable<Content>{
   console.log("sending data")
    return this.http.post<Content>(this.url, formData).pipe(
      catchError(this.handleError)
    );;
  }

  getContentList():Observable<Content[]>{
     return this.http.get<Content[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }
  

}
