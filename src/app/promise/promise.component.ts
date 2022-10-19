import { Component, OnInit } from '@angular/core';
import { PromisesService } from '../promises.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  prodata: any;

  constructor(private f:PromisesService) { 
    this.getcollectdata();
  }

  ngOnInit(): void {
  }
  getcollectdata() {
    this.f.getprodata()
      .then((res: any) => {
        console.log(res);
        console.log(res.products);
       this.prodata=res.products;
       for (let i = 0; i < this.prodata.length; i++) {
        // this.prodata.products[i].yol = 2000 + i;
        this.prodata[i].yol=2000+i;
      } 
        })
        
  }
}
