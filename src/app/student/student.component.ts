import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  details:Student[]
  onClickAdd=false;
  constructor(private service:StudentService) { 
    
      
      
  }

  ngOnInit(): void {
this.service.getStudents().subscribe(data=>{
this.details=data
console.log(this.details)
})
  }
add(){
  console.log("add students")
  this.onClickAdd=true
}
onSubmit(details:Student){
  this.service.postStudents().subscribe(data=>{
    JSON.stringify(data)
    console.log(data)
  })
  console.log(details)
}
}
