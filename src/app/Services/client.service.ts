import { Client } from './../Model/client';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  headers= new HttpHeaders()
  .set('authorization', localStorage.getItem('token'))

  constructor(private http:HttpClient) { }

  saveClientSubscription(client:Client):Observable<string>{
    
    return this.http.put<string>(`${environment.API_URL}/client`,client);
  }

  saveClientQuestion(client:Client):Observable<string>{  
   
    return this.http.put<string>(`${environment.API_URL}/client`,client);
  }
  getAllClients():Observable<Client>{
    return this.http.get<Client>(`${environment.API_URL}/client/allclients`,{ 'headers': this.headers });

  }
}
