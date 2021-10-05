import { ServiceImpl } from './../Model/service-impl';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private service:any;
  private serviceId:any;

  constructor() { }
 

  setServiceId(newData) {
   this.serviceId=newData;
  }

  getServiceId(){

    return this.serviceId;
  }
  setService(service:ServiceImpl){
     this.service=service;

  }
  getService(){
    return this.service;
  }
}
