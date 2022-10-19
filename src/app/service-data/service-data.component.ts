import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
postData:any;
  constructor(private http:ServiceService) {
    this.getallprodata();
   }

  ngOnInit(): void {
  }
  getallprodata(){
    this.http.getprodata().subscribe(
      (res:any)=>{
        console.log(res);
        console.log(res.products)
        this.postData=res.products;
      }
    )
  }
}

