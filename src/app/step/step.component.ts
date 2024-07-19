import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepPopupComponent } from '../step-popup/step-popup.component';
import { ContentType } from '../models/ContentType';
import { Content } from '../models/Content';
import { ContentService } from '../services/content.service';
import { Subscription } from 'rxjs';


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

  constructor(private dialog: MatDialog, private contentService: ContentService){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    this.contentService.getContentList().subscribe({
      next: data => this.contentList = data,
      error: err=> console.error(err)
    })
  }

 
  
  public addContentOpenDialog(type: ContentType){
    let dialogRef = this.dialog.open(StepPopupComponent, {
      width:'700px',
      height: '700px',
      data:{orderNumber:6, step:{}, contentType: type}
    })

   const dialogSub =  dialogRef.afterClosed().subscribe({
      next: (formData) => {
        if (formData) { 
       const contentSub: Subscription = this.contentService.sendContent(formData).subscribe({
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
