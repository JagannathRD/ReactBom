import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import{StudentComponent} from './student/student.component'

const routes: Routes = [{path:'student', component:StudentComponent},
                        {path:'addstudent',component:AddStudentComponent}   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
