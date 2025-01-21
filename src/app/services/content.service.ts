import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../models/Content';
import { catchError, Observable, throwError } from 'rxjs';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends ServiceService {
 
  
  constructor(private http: HttpClient, router:Router) {
    super(router);
  }


  sendContent(formData: FormData, stepId:number): Observable<Content>{
   console.log("sending data")
    return this.http.post<Content>(`${this.baseUrl}/${stepId}/content`, formData).pipe(
      catchError(this.handleError)
    );;
  }

  getContentList(stepId:number):Observable<Content[]>{
     return this.http.get<Content[]>(`${this.baseUrl}/${stepId}/content?step=${stepId}`).pipe(
      catchError(this.handleError)
    );
  }
  

}
