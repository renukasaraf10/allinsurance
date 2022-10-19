import { Component, OnInit } from '@angular/core';
import { PrasService } from '../pras.service';

@Component({
  selector: 'app-pradata',
  templateUrl: './pradata.component.html',
  styleUrls: ['./pradata.component.css']
})
export class PradataComponent implements OnInit {
  data: any;
  id: any;
i:any
  sedata: any;
  constructor(private api:PrasService) { }

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
    postId:1,
    id:6,
    name:"Renuka Saraf",
    email:"renukas1234@gmail.com",
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
    postId:1,
    id:6,
    name:"Uma Saraf",
    email:"umas4567@gmail.com",
}
this.api.updateApidata(this.sedata).subscribe(
  (res:any)=>{
    console.log(res);
    this.sedata=res;
    this.data.push(this.sedata)
  }
)
}
}





