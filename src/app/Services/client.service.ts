import { Client } from './../Model/client';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http:HttpClient) { }
  getHeaders(){
    let   headers=  new HttpHeaders().set('authorization', localStorage.getItem('token'));
      return headers;
  }
  saveClientSubscription(client:Client):Observable<string>{
    
    return this.http.put<string>(`${environment.API_URL}/client`,client);
  }

  saveClientQuestion(client:Client):Observable<string>{  
   
    return this.http.put<string>(`${environment.API_URL}/client`,client);
  }
  getAllClients():Observable<Client>{
    return this.http.get<Client>(`${environment.API_URL}/client/allclients`,{ 'headers':  this.getHeaders() });

  }
}
