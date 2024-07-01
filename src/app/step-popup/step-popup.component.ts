import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Content } from '../models/Content';

@Component({
  selector: 'app-step-popup',
  templateUrl: './step-popup.component.html',
  styleUrl: './step-popup.component.css'
})
export class StepPopupComponent {

  content: Content = {title:"", text:"", orderNumber: this.data.orderNumber, step: this.data.step, type: this.data.contentType};
  
  constructor(private dialogRef: MatDialogRef<StepPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}
  
 


  onCancel(): void{
    this.dialogRef.close();
   
  }

  onValidate(){

  }

}
