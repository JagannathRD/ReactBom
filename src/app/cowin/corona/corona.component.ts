import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  constructor(private service:CoronaService) { }

  ngOnInit(): void {

    this.service.getStates().subscribe(data=>{
      console.log(data)
    })
  }

}
