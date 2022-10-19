import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
Parentdata:any="I am the data of parent";
dataFromChildToParent:any;
  constructor() { }
  @ViewChild(ChildComponent) childCmp:any;
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.childCmp.noramlMethodofChild();
    console.log(this.childCmp.dataFromChildToParent);
  }



  emitforchildtoparent(ev:any){
    console.log("Hello this is custom event");
    console.log(ev);
    this.dataFromChildToParent= ev;
  }
}
