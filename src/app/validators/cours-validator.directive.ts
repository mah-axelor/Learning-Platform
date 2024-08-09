import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCoursValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CoursValidatorDirective,
      multi: true
    }
  ]
})
export class CoursValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): {[key: string]:any}|null {
    let isInvalid = false;
    const invalides = {invalidName : false, invalidOpeningDate: false, invalidDates:false}
    const courseName = control.get('courseName');
    if(!courseName || !courseName.value) {
      invalides.invalidName = true;
      isInvalid = true;
    }
    const openingDate = control.get('openingDate')?.value;
    const closingDate = control.get('closingDate')?.value;    
    if(!openingDate && closingDate) {
      invalides.invalidOpeningDate = true;
      isInvalid = true;
    }
    if(openingDate && closingDate && openingDate >= closingDate) {
      invalides.invalidDates = true;
      isInvalid = true;
    }
    return isInvalid ? invalides : null;   
  }
  

}
