import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  Courses:any=["Bsc","BCA","BCS","Btech"];
  fn:any="";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(frm:any){
    console.log(frm.value);
    console.log("Hello form is submitted");
    console.log(frm.value.fname);
    // this.onSubmitForm(frm.any);
    // console.log(this.fn);
    // console.log(frm);
  }
}
