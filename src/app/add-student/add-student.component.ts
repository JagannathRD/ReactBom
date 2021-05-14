import { Component, OnInit } from '@angular/core';
import { Student2 } from '../classes/student2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
details:Student2[]

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    console.log(this.details)
  }

  onSubmit(details:Student2){
    this.service.postStudents(details).subscribe(data=>{
      JSON.stringify(data)
      console.log(data)
    })
    console.log(details)
  }
}
