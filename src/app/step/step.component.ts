import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepPopupComponent } from '../step-popup/step-popup.component';
import { ContentType } from '../models/ContentType';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: ``
})
export class StepComponent {

  constructor(private dialog: MatDialog){}
  
  public addTextOpenDialog(){
    let dialogRef = this.dialog.open(StepPopupComponent, {
      width:'700px',
      height: '700px',
      data:{orderNumber:6, step:{}, contentType: ContentType.TEXT}
    })
  }

  public addImageOpenDialog(){
    let dialogRef = this.dialog.open(StepPopupComponent, {
      width:'700px',
      height: '700px',
      data:{orderNumber:7, step:{}, contentType: ContentType.IMAGE}
    })
  }

  public addVideoOpenDialog(){
    let dialogRef = this.dialog.open(StepPopupComponent, {
      width:'700px',
      height: '700px',
      data:{orderNumber:8, step:{}, contentType: ContentType.VIDEO}
    })
  }
}
