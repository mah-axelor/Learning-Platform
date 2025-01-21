import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentPopupComponent } from '../content-popup/content-popup.component';
import { ContentType } from '../../models/ContentType';
import { Content } from '../../models/Content';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: ``
})
export class StepComponent implements OnInit, OnDestroy{

  contentList: Content[] = [];

  private subscriptions: Subscription = new Subscription();
  typeVideo: ContentType = ContentType.VIDEO;
  typeText: ContentType = ContentType.TEXT;
  typeImage: ContentType = ContentType.IMAGE;
  stepId?:number;
  constructor(private dialog: MatDialog, private contentService: ContentService, private route:ActivatedRoute, private router:Router){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {  
    // let getCourseSub = this.route.paramMap.subscribe((param:ParamMap)=>{
    //       let stepId = param.get('stepId') ?? '';
    //      console.log("route:",this.router.url) 
    //       let courseId = this.router.url.split('/')[2];
               
    //      console.log("stepId:",stepId)
    //      console.log("courseId:",courseId)
        //  this.contentService.getContentList(courseId, stepId).subscribe({
        //   next: data => this.contentList = data,
        //   error: err=> console.error(err)
        // })
    //     })
    //     this.subscriptions.add(getCourseSub);
  let sub =  this.route.paramMap.subscribe((param:ParamMap)=>{
      let stepId_str = param.get('stepId') ?? '';
      this.stepId = parseInt(stepId_str);      
      this.contentService.getContentList(this.stepId).subscribe({
        next: data => this.contentList = data,
        error: err=> console.error(err)
      })
    })
    this.subscriptions.add(sub);
  }
  

  public getOrderedContentList():Content[]{
    return this.contentList.sort((content1,content2)=>content1.orderNumber-content2.orderNumber);
  }

  public getNextOrder():Number{
    return this.contentList.length +1;
  }
 
  
  public addContentOpenDialog(type: ContentType){
    let dialogRef = this.dialog.open(ContentPopupComponent, {
      width:'700px',
      height: '700px',
      data:{orderNumber:this.getNextOrder(), step:{}, contentType: type}
    })

   const dialogSub =  dialogRef.afterClosed().subscribe({
      next: (formData) => {
        if (formData && this.stepId) { 
       const contentSub: Subscription = this.contentService.sendContent(formData, this.stepId).subscribe({
            next: (content) => this.contentList.push(content),
            error: (err) => console.error('Error saving content:', err),
            complete: () => contentSub.unsubscribe()
          });
          this.subscriptions.add(contentSub);
        }
      },
      error: (err) => console.error('Error closing dialog:', err)
    });
    this.subscriptions.add(dialogSub);
  }
  
}
