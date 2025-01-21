import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-step-popup',
  templateUrl: './step-popup.component.html',
  styleUrl: './step-popup.component.css'
})
export class StepPopupComponent {
  stepTitle!:string

  constructor(private dialogRef:MatDialogRef<StepPopupComponent>){}

  public onCancel(){
    this.dialogRef.close();
  }

  public onSubmit(){    
    this.dialogRef.close(this.stepTitle)
  }
}
