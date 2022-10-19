import { Component, OnInit } from '@angular/core';
import { ForpraService } from '../forpra.service';

@Component({
  selector: 'app-forpra',
  templateUrl: './forpra.component.html',
  styleUrls: ['./forpra.component.css']
})
export class ForpraComponent implements OnInit {
  courses: any = [ 'Courese','BE', 'BCA', 'BTECH', 'BSC'];
  fn: any = "Renuka";

  data: any = [];
  showData: boolean = false;

  fna: any;
  ln: any;
  mail: any
  edu: any
  editIndex: any
  showButton: boolean = false        
  submitButton: boolean = true
  sedata: any;

  constructor(private api:ForpraService) { }

  ngOnInit(): void {
    this.getdata();
    this.sendData();
    this.updateData();
  }
  getdata() {
    this.api.getApidata().subscribe(
      (res:any)=>{
        console.log(res)
        this.data =res
      }
      )
    }
   sendData(){
    this.sedata={

  }
  this.api.sendApidata(this.sedata).subscribe(
    (res:any)=>{
      console.log(res);
      this.sedata=res;
      this.data.push(this.sedata)
    }
  )
   } 
  
  updateData(){
    this.sedata={

  }
  this.api.updateApidata(this.sedata).subscribe(
    (res:any)=>{
      console.log(res);
      this.sedata=res;
      this.data.push(this.sedata)
    }
  )
  }
  onSubmitForm(frm: any) {
    console.log(frm.value);
    let data = frm.value;
    // console.log(frm.value.fname);
    this.data.push(frm.value)
    if (this.data.length > 0) {
      this.showData = true;
    }
    console.log(this.data)
  }

  onDelete(dat: any) {
    // console.log(dat);
    this.data.forEach((element: any) => {
      console.log(element);
      if (dat.fname == element.fname) {
        console.log(dat);
        this.data.splice(this.data.indexOf(dat), 1)
      }
    })


  }

  onEdit(x: any) {
    // console.log("EDITED")
    // console.log(x)
    this.fna = x.postId
    this.ln = x.id
    this.mail = x.email
    this.edu = x.name
    // console.log(this.dataArr.indexOf(x))
    this.editIndex = this.data.indexOf(x)
    // this.showButton = true
    // this.submitButton = false
  }

  onUpdateTemp(myForm1: any) {
    console.log("Updated");
    console.log(myForm1.value)
    this.data.splice(this.editIndex, 1, myForm1.value)
    // this.showButton = false
    // this.submitButton = true
  }


}
