import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h1 [style.background-color]='"red"' >
      Please login or register to continue
    </h1>
  `,
  styles: ``
})
export class ErrorPage {

}
