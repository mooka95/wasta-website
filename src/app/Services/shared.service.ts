import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // data$: Observable<any> = this.data.asObservable();
  private service:any;
  private serviceId:any;

  constructor() { }
 

  setServiceId(newData) {
   this.serviceId=newData;
  }

  getServiceId(){

    return this.serviceId;
  }
}
