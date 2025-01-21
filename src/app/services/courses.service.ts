import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, interval, map, Observable } from 'rxjs';
import { Course }  from '../models/Course';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';
import { Step } from '../models/Step';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends ServiceService{

  path: string = '/course';
  url = this.baseUrl+this.path;
  
  constructor(private http: HttpClient, router:Router) {
    super(router);
    
  }

  public getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.url).pipe(catchError(this.handleError));
  }

  public getCourseById(courseId: any): Observable<Course>{
    return this.http.get<Course>(this.url+`/${courseId}`).pipe(catchError(this.handleError));
  }

  public sendCourse(course: Course): Observable<Course>{
    console.log('course:', course);
    return this.http.post<Course>(this.url,course).pipe(catchError(this.handleError));
  }
  
}
