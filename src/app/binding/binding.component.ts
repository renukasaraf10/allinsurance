// FOR BINDING.TS

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public Data:string="Hello this is Data Binding"
public Link:string="";
public form:string=""
public  New: string=""
public h:string="hey renu";


  constructor() { }

  ngOnInit(): void {
    // this.Data="Hello this is Data Binding"
    this.Link="https://www.facebook.com/";
    this.form="  "
    this.New="   "
  }
clickhere(){
  console.log("Hello click event");
}
}
 