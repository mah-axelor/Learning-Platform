import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Cours } from '../models/Cours';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends ServiceService{

  path: string = '/course';
  url = this.apiUrl+this.path;
  constructor(private http: HttpClient) {
    super();
  }

  public getAllCourses(): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.url).pipe(catchError(this.handleError));
  }

  public getCourseById(courseId: any): Observable<Cours>{
    return this.http.get<Cours>(this.url+`/${courseId}`).pipe(catchError(this.handleError));
  }

  public sendCourse(course: Cours): Observable<Cours>{
    console.log('course:', course);
    return this.http.post<Cours>(this.url,course).pipe(catchError(this.handleError));
  }
}
