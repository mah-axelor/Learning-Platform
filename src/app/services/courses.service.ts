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
}
