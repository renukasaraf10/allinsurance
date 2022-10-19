import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsdService } from '../fsd.service';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.css']
})
export class FComponent implements OnInit {
renu:any;
saraf:any;
  constructor(private rs:FsdService , private rout:Router) {
    this.rs.getmsg().subscribe((res:any)=>{
      console.log(res);
      this.saraf= res;
    })
   }

  ngOnInit(): void {
  }
sendmydata(){
this.renu=("Hello please take my data");
this.rs.setmsg(this.renu);
this.rout.navigate(['s'])
}
}
