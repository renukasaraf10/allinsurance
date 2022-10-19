import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrasService {


  constructor(private http: HttpClient) { }


getApidata(){
  return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
}


sendApidata(dt:any){
  return this.http.post('https://jsonplaceholder.typicode.com/comments?postId=1',dt)
}


updateApidata(dt1:any){
  return this.http.post('https://jsonplaceholder.typicode.com/comments?postId=1',dt1)
}

}
