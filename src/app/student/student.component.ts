import { Component, OnInit } from '@angular/core';
import { Codes } from '../classes/codes';
import { Student } from '../classes/student';
import { Student2 } from '../classes/student2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  details:Student2[]
  detail:Student2[]
  onClickAdd=false;
  codes:Codes[]
  field:any[]
  id:any

  studentModel= new Student2();
  constructor(private service:StudentService) { 
         
  }

  ngOnInit(): void {
this.service.getCode().subscribe(data=>{
data.field.forEach(element => {
  this.codes=element
  console.log(element.id)
  console.log(this.codes)
});
console.log(this.codes)


})
  }
add(){
  console.log("add students")
  this.onClickAdd=true
}
onSubmit(details:Student2){
  this.service.postStudents(details).subscribe(data=>{
    JSON.stringify(data)
    console.log(data)
  })
  console.log(details)
}
}
