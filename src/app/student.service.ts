import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './classes/student';
import { Student2 } from './classes/student2';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 url:string='http://localhost:8080/student';
 

  constructor(private http:HttpClient) {

   }

   getStudents():Observable<any>{
     return this.http.get<any>(this.url);
   }
    httpOptions={
    headers: new HttpHeaders ({'content-type':'application/json'})
  }

   postStudents(post:Student2):Observable<Student2>{
     return this.http.post<any>(this.url,post)
   }
  }
