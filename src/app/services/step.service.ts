import { Injectable } from '@angular/core';
import { Step } from '../models/Step';
import { ServiceService } from './service.service';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StepService extends ServiceService {
  
  
  constructor(private http:HttpClient, router:Router) {
    super(router);
  }

  public addStep(step: Step, courseId:number):Observable<Step>{
    return this.http.post<Step>(`${this.baseUrl}/${courseId}/step`,step).pipe(catchError(this.handleError));
  };
}
