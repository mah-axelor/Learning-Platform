import { Component, Inject } from '@angular/core';
import { Course }  from '../../models/Course';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cours-popup',
  templateUrl: './cours-popup.component.html',
  styleUrl: './cours-popup.component.css'
})
export class CoursPopupComponent {
 
  course: Course = {name:""};


constructor(private dialogRef: MatDialogRef<CoursPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

public onCancel(){
  this.dialogRef.close()
}
  public onSubmit(){
    this.dialogRef.close(this.course);
  }
}
