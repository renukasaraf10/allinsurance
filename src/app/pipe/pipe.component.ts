import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  // FOR SIMPLE TEXT:
  sampletext:string ="Hello This is Angular Pipes";
  // FOR JSON:
  City :any =["Akluj","Pune","Barmati","Mumbai"];
  // FOR DATE:
  date1 = new Date();
  // FOR CUSTOM:
  data:any = [
    {name:"Renuka", age:19 },
    {name:"Renuka", age:19 },
    {name:"Renuka", age:19 }
  ]
// FOR SALARY:
  salary:any= 100000; 

  constructor() { }

  ngOnInit(): void {
  }

}
