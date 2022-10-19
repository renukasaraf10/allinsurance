import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  sample:any="Hello Angular";
  constructor() {
    console.log("Constructor of the class");
   }

  ngOnInit(): void {
    console.log("Hello this is onInit Method");
  }
  ngDoCheck(): void {
    // this.sample="This is angular";
    console.log("This is do check method");
  }

  ngOnChanges() {
    console.log("Hello this is ngOnchnages Method");
  }

  ngAfterContentInit(){
    console.log("This is ngAfterContentInit method");
  }

  ngAfterContentChecked(){
    console.log("This is ngAfter View Init");
  }

  ngAfterViewInit(){
    console.log("This is ngAfter View Init");
  }

  ngAfterViewChecked() {
    console.log("This is ngAfter view checked method");
  }

  ngOnDestroy(){
    console.log("Hello this is ngDestroy");
  }

}
