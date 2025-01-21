import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CoursComponent } from './components/cours/cours.component';

import { StepComponent } from './components/step/step.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPage } from './components/error/error.component';


const routes: Routes = [
  {path:'', redirectTo: '/myCourses', pathMatch: 'full'},
  // {path:'myCourses/:courseId', component: CourseDetailsComponent, children:[
  //   {path:'steps/:stepId', component:StepComponent},
  //   {path:'steps', component:StepsComponent}
  // ]}, 
 
  {path:'courses', component: CoursesComponent},
  {path:'courses/:courseId', component: CoursComponent, children:[
    {path:':stepId', component: StepComponent},
  ]},
  {path:'myCourses', component: MyCoursesComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'error',component:ErrorPage},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
