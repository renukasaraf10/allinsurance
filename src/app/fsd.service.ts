import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FsdService {
private msg = new BehaviorSubject('');
currentdata = this.msg.asObservable();
  constructor() { }
setmsg(r:any){
  this.msg.next(r);
}




getmsg(){
  return this.currentdata;
}
}
