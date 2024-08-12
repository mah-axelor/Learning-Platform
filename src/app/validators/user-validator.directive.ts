import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CoursValidatorDirective } from './cours-validator.directive';

@Directive({
  selector: '[appUserValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UserValidatorDirective,
      multi: true
    }
  ]
})
export class UserValidatorDirective implements Validator {
  
  constructor() { }
  validate(control: AbstractControl): {[key:string]:any} | null {
    let password = control.get('password');
    let confPassword = control.get('confPassword');
    return password?.value !== confPassword?.value ? {doesntMatch: true} : null;
  }
 

}
