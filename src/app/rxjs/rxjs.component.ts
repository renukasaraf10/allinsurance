import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  arr:any=[1,2,3,4,5,6,7,8,9,10];
  dataStream:any;

  ngOnInit(): void {
    
    this.dataStream=from(this.arr);          

    console.log(this.dataStream);

    console.log(this.arr);
  
    this.dataStream.subscribe(
      (res:any)=>{console.log(res);},
      (err:any)=>{console.log(err);}
    )
    this.dataStream.pipe(
      map((x:any)=>x*5),
      filter((y:any)=> y % 2 == 0)
      ).subscribe(
      (res:any)=>{ console.log(res)}
    )
      }
  }


