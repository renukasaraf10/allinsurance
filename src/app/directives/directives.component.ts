// FOR DIRECTIVE.TS
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
nm:any
  eligible:boolean=true;
  noteligible:boolean=false;
  courses:any=['coursrs','HTML','Angular','Java','Paython']
  constructor() { }

  ngOnInit(): void {
    
  }
clickhere(){
  if(this.nm>=18){
    this.eligible=true;
    this.noteligible=false
  }else{
    this.noteligible=true;
    this.eligible=false
  }
  console.log("submited succsfully")
}
}
