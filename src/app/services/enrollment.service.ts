import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course }  from '../models/Course';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService extends ServiceService {
  path: string = this.baseUrl + '/enrollment';
  constructor(private http:HttpClient, router:Router) {
    super(router);
  }

  public enroll(courseId: number | undefined): Observable<any>{    
   return this.http.post(`${this.path}/${courseId}`,null).pipe(catchError(this.handleError))
  }
  public getEnrollmentsByUser(): Observable<Course[]>{
    return this.http.get<Course[]>(this.path).pipe(catchError(this.handleError));
  }
}
