import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CoursComponent } from './components/cours/cours.component';

import {MatButtonModule} from '@angular/material/button';



import { CoursPopupComponent } from './components/cours-popup/cours-popup.component';
import { CoursValidatorDirective } from './validators/cours-validator.directive';


import { UserValidatorDirective } from './validators/user-validator.directive';
import { authInterceptor } from './services/auth.interceptor';
import { StepComponent } from './components/step/step.component';
import { ContentPopupComponent } from './components/content-popup/content-popup.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StepsComponent } from './components/steps/steps.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorPage } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { StepPopupComponent } from './step-popup/step-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    ContentPopupComponent,
    CoursComponent,
    CoursesComponent,
    NavBarComponent,
    StepsComponent,
    MyCoursesComponent,
    CoursPopupComponent,
    CoursValidatorDirective,
    RegisterComponent,
    LoginComponent,
    UserValidatorDirective,
    ErrorPage,
    StepPopupComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch(),withInterceptors([authInterceptor])),
    
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
