import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatcomService {

  constructor(private http:HttpClient) { }
  getApiData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  sendApidata(dt:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users',dt)

  }
  updateApidata(dt1:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users',dt1)
  }
}
