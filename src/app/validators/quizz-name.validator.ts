import { AbstractControl, ValidatorFn } from "@angular/forms";

export function quizzNameValidator(forbiddenInput: RegExp): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null =>{
        const isForbidden = forbiddenInput.test(control.value);
      return  isForbidden ? {forbiddenInput: {value: control.value}} : null;
    }
}