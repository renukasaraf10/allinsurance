import { Component, OnInit } from '@angular/core';
import { DatcomService } from '../datcom.service';

@Component({
  selector: 'app-datacome',
  templateUrl: './datacome.component.html',
  styleUrls: ['./datacome.component.css']
})
export class DatacomeComponent implements OnInit {
// data:any;

  cdata:any;
  showdata:any;
  update:any

 
 
  constructor(private api:DatcomService) { }

  ngOnInit(): void {
   this.getdata();
   this.sendData();
   this.updateData();
  
  }
  
getdata(): void{
  this.api.getApiData().subscribe(
    (res:any)=>{
      console.log(res);
     
      this.showdata=res;
    },
    (err:any)=>{
      console.log(err);
    }
  )
}
sendData(){
  this.cdata={
    id:11,
    name:"uma",
    username:"uma saraf",
    email:"usaraf23415@gmail.com"
  }
  this.api.sendApidata(this.cdata).subscribe(
    (res:any)=>{
      console.log(res)
      this.cdata = res
      this.showdata.push(this.cdata)

    }
  )
}

updateData(){
  this.update={
    id:11,
    name:"nima",
    username:"uma saraf",
    email:"usaraf23415@gmail.com"
  }
  this.api.updateApidata(this.update).subscribe(
    (res:any)=>{
      console.log(res)
      this.update = res
      this.showdata.push(this.update)

    }
  )
}






}

