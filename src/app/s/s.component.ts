import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsdService } from '../fsd.service';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {

  saraf:any;
  constructor(private rs:FsdService, private rout:Router) {
    this.rs.getmsg().subscribe((res:any)=>{
      console.log(res);
      this.saraf= res;
    })
   }

  ngOnInit(): void {
  }
sendyourdata(){
  let rr="Please send your data";
  this.rs.setmsg(rr);
  this.rout.navigate(['f'])
}
}
