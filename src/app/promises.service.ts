import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  
  f:any;
  constructor(private http: HttpClient) { }
  getprodata(){
    return this.http.get('https://dummyjson.com/products').toPromise();
  }
}
