
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input()   childdata:any;

   @Output() event:any=new EventEmitter<any>();

   dataFromChildToParent:any;
  constructor() { 
 this.dataFromChildToParent="I am the data of child"
  }

  ngOnInit(): void {
  }
  sendDataFromParent(){
    console.log("Hi");
    this.event.emit(this.dataFromChildToParent);
  }
}
