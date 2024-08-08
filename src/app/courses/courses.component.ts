import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Cours } from '../models/Cours';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  courseList: Cours[] = [];
  constructor(private coursesService: CoursesService){}
  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: data => this.courseList = data,
      error: error => console.error(error)      
    })
  }

}
