import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './step/step.component';
import { CoursComponent } from './cours/cours.component';
import { CoursesComponent } from './courses/courses.component';
import { StepsComponent } from './steps/steps.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  {path:'courses/:id', component: CoursComponent, children:[
     {path:'steps/:id', component: StepComponent},
     {path:'steps', component: StepsComponent}
  ]}, 

  {path:'courses', component: CoursesComponent},
  {path:'myCourses', component: MyCoursesComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
