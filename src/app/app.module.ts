import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentComponent } from './student/student.component';
import{HttpClientModule} from '@angular/common/http'
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
