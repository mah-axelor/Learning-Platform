import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cours } from '../models/Cours';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit, OnDestroy{
  
  course!:Cours
  private subscriptions: Subscription = new Subscription();
  constructor(private route:ActivatedRoute, private courseService: CoursesService){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
ngOnInit(): void {
  
   let getCourseSub = this.route.paramMap.subscribe( (param:ParamMap)=>{
      let paramId = param.get('id') ?? '';      
      this.courseService.getCourseById(paramId).subscribe({
        next: courseData => this.course = courseData,
        complete: () => getCourseSub.unsubscribe() 
      });
    })
    this.subscriptions.add(getCourseSub);
    
  }
}
