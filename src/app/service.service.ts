import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  postData: any;

  constructor(private http: HttpClient) { 

  }
getprodata(){
return this.http.get('https://dummyjson.com/products')
}
}
