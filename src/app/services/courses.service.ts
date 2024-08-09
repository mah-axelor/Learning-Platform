import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Cours } from '../models/Cours';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends ServiceService{

  apiUrl: string = 'http://localhost:8080/api/course';

  constructor(private http: HttpClient) {
    super();
  }

  public getAllCourses(): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  public getCourseById(courseId: any): Observable<Cours>{
    return this.http.get<Cours>(this.apiUrl+`/${courseId}`).pipe(catchError(this.handleError));
  }

  public sendCourse(course: Cours): Observable<Cours>{
    console.log('course:', course);
    return this.http.post<Cours>(this.apiUrl,course).pipe(catchError(this.handleError));
  }
}
