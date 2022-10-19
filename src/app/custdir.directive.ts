import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private ele:ElementRef) {
    console.log(this.ele.nativeElement);

    this.ele.nativeElement.style.background="skyblue";
    // this.ele.nativeElement.style.background="orange";
    
   }

}
