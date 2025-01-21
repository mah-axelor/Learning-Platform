import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course }  from '../../models/Course';
import { MatDialog } from '@angular/material/dialog';
import { CoursPopupComponent } from '../cours-popup/cours-popup.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit, OnDestroy {

  courseList: Course[] = [];
  private subscriptions: Subscription = new Subscription();
  constructor(private coursesService: CoursesService,private dialog: MatDialog, private router: Router, private route: ActivatedRoute){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  // ngOnInit(): void {
  //   this.coursesService.getAllCourses().subscribe({
  //     next: data => this.courseList = data,
  //     error: error => console.error(error)      
  //   })
  // }
  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(
       (data:Course[]) => this.courseList = data,
           
    )
  }


  public openAddCourseDialog(){
    let dialogRef = this.dialog.open(CoursPopupComponent,{
      width:'700px',
      height: '700px'
    })

   let dialogSub = dialogRef.afterClosed().subscribe({
      next: courseData => {
        if(!courseData) return;
        let sentDataSub: Subscription = this.coursesService.sendCourse(courseData).subscribe({
        next: course => this.courseList.push(course),
        error: e=> console.error(e),
        complete: ()=> sentDataSub.unsubscribe()
      })
      this.subscriptions.add(sentDataSub);
    },
      error: error => console.error(error)
    })
    this.subscriptions.add(dialogSub);
  }



  public navigate(course: Course){
    this.router.navigate([course.id],{relativeTo:this.route})
  }

}
