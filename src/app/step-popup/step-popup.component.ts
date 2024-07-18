import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Content } from '../models/Content';
import { ContentType } from '../models/ContentType';
import { Step } from '../models/Step';
import { NgForm } from '@angular/forms';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-step-popup',
  templateUrl: './step-popup.component.html',
  styleUrl: './step-popup.component.css'
})
export class StepPopupComponent {
  
  imageInvalid: boolean = false;
  videoInvalid: boolean = false;
  orderNumber: number = this.data.orderNumber;
  contentType: ContentType =this.data.contentType;
  step: Step = this.data.step;
  contentTitle: string = '';
  contentText: string = '';
  selectedFile: File | null = null;
  constructor(private dialogRef: MatDialogRef<StepPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private contentService: ContentService){}
  
 


  onCancel(): void{
    this.dialogRef.close();   
  }

  onFileChange(event: any){
   if(event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    }
  }
  onValidate(contentForm: NgForm){
    console.log("file:",this.selectedFile);
    if(!this.selectedFile && this.contentType!=0){
        if(this.contentType===ContentType.IMAGE) this.imageInvalid = true;
        else if(this.contentType===ContentType.VIDEO) this.videoInvalid = true;
      return ;
    }
    const formData = new FormData();
   if(this.selectedFile) formData.append('file', this.selectedFile);
   let content:Content = {
     orderNumber: this.orderNumber,
     step: this.step,
     type: this.contentType,
     text: this.contentText,
     title: this.contentTitle
   }; 
  //  formData.append('contentType',this.contentType.toString());
  //   formData.append('orderNumber', this.orderNumber.toString());
  //   formData.append(' contentTitle', this. contentTitle);
  //   formData.append(' contentText', this. contentText);
  //   formData.append(' step', JSON.stringify(this.step));
  formData.append('content', JSON.stringify(content));

    this.contentService.sendContent(formData).subscribe(res =>{
      console.log('response:'+res)
    },
    err => console.log("error:", err)
    );
  }

}
