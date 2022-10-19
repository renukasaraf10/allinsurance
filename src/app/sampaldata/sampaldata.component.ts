import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampaldata',
  templateUrl: './sampaldata.component.html',
  styleUrls: ['./sampaldata.component.css']
})
export class SampaldataComponent implements OnInit {
checkflag:boolean=true;
showingtemplate: any=""
subject:any=['Hindi', 'English','Math' ,'Marathi' ]

subjectflag:boolean=true 
  constructor() { }

  ngOnInit(): void {
  }

}
