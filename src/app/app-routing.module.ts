import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './step/step.component';
import { CoursComponent } from './cours/cours.component';
import { CoursesComponent } from './courses/courses.component';
import { StepsComponent } from './steps/steps.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {path:'steps/:id', component: StepComponent},
  {path:'courses/:id', component: CoursComponent},
  {path:'steps', component: StepsComponent},
  {path:'step', component: StepComponent},
  {path:'courses', component: CoursesComponent},
  {path:'myCourses', component: MyCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
