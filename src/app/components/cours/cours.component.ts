import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course }  from '../../models/Course';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';
import { EnrollmentService } from '../../services/enrollment.service';
import { StepPopupComponent } from '../../step-popup/step-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Step } from '../../models/Step';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit, OnDestroy{
  
  course!:Course
  error!: any;
  errorCodePatern: RegExp = /(?<=Error Code: )[0-9]+/
  private subscriptions: Subscription = new Subscription();
  constructor(private dialog:MatDialog,private route:ActivatedRoute, private courseService: CoursesService, private stepService:StepService, private enrollmentService: EnrollmentService, private router:Router){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
ngOnInit(): void {
  
   let getCourseSub = this.route.paramMap.subscribe((param:ParamMap)=>{
      let courseId = param.get('courseId') ?? '';      
      this.courseService.getCourseById(courseId).subscribe({
        next: courseData => {
          this.course = courseData;
          console.log("courseData:", this.course)
          // this.router.navigate([1],{relativeTo:this.route})
        },
        error: e => {
          //  this. error = this.errorCodePatern.exec(e)?.[0]
          this.router.navigate(["/error"],{replaceUrl:true});
          },
        complete: () => getCourseSub.unsubscribe() 
      });
    })
    this.subscriptions.add(getCourseSub);
    
  }


  public enroll(){
    if(!this.course?.id) return;
    this.enrollmentService.enroll(this.course.id).subscribe({

    });
  }

  public getNextStepOrder(): number | null{
    return this.course.stepList ? this.course?.stepList?.length +1:null;
  }


  public addStep(){
    let dialogRef = this.dialog.open(StepPopupComponent, {
      width:'200px',
      height: '250px',      
    })
    
    let sub = dialogRef.afterClosed().subscribe((title: string)=>{
      let order = this.getNextStepOrder();
      if(!order){
        sub.unsubscribe()
        return;
      }
      
      let step:Step = {        
        orderNumber: order,
        title: title
            }
            if(!this.course.id){
              return;
            }
         let pushSub = this.stepService.addStep(step, this.course.id).subscribe(step=>{
              this.course.stepList?.push(step)
            })
            this.subscriptions.add(pushSub);
    })

    this.subscriptions.add(sub);

  }

  showStep(stepId:number|undefined){
    console.log("stepId:",stepId)
    if(!stepId) return;
    this.router.navigate([stepId],{relativeTo:this.route});
  }

}
