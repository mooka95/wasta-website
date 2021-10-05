import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceImpl } from '../Model/service-impl';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyServicesService {


  constructor(private http: HttpClient) { }


  getServices():Observable<ServiceImpl[]>{

    return this.http.get<ServiceImpl[]>(`${environment.API_URL}/service`)
      
  }

  getServiceFromId(id:string):Observable<ServiceImpl>{
    const headers= new HttpHeaders().set('id', id);
    return this.http.get<ServiceImpl>(`${environment.API_URL}/service/id`,{'headers':headers});
  }

  addService(sevice:ServiceImpl):Observable<String>{
    const headers= new HttpHeaders()
    .set('authorization', localStorage.getItem('token'))
   return this.http.post<String>(`${environment.API_URL}/service`,sevice,{'headers':headers})

  }
}
