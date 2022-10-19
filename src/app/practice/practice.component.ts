import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
a:string="hello data"
link:string="https://www.facebook.com/login.php/"
form: any;
sample:any="sample data"
date1=new Date()
salary:any=100000
data:any=[
 { name:'renuka',age:23}
]


  n: any
  happy:boolean=true;
  sad:boolean=false

  ad:any=['b', 'c','d']
  dataapi: any;
  constructor(private dt:PracticeService) { }

  ngOnInit(): void {
    this.getupidata();
  }
renu(){
  console.log("hello renu")
}
clickhere(){
  if(this.n>=18){
     this.happy=true;
     this.sad=false;
  }else{
    this.happy=false;
    this.sad=true;
  }
  }
  getupidata(){
    this.dt.getdata().subscribe(
      (res:any)=>{
        console.log(res)
        this.dataapi = res.products
      }
    )
  }
}


