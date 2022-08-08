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
   getCode(){
     return this.http.get<any>('https://api.data.gov.in/resource/04cbe4b1-2f2b-4c39-a1d5-1c2e28bc0e32?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
   }
  }
