import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { StepPopupComponent } from './step-popup/step-popup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { CoursesComponent } from './courses/courses.component';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StepsComponent } from './steps/steps.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CoursPopupComponent } from './cours-popup/cours-popup.component';
import { CoursValidatorDirective } from './validators/cours-validator.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserValidatorDirective } from './validators/user-validator.directive';
import { authInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    StepPopupComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
