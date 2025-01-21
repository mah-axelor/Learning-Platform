import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course }  from '../../models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent implements OnInit{
  myCourses:Course[]=[];
  constructor(private enrollmentService: EnrollmentService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.enrollmentService.getEnrollmentsByUser().subscribe({
      next: courses => this.myCourses = courses
    })    
  }

  public navigate(course: Course){
    this.router.navigate([course.id,'steps'],{relativeTo:this.route})
  }

}
