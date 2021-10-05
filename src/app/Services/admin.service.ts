import { AdminImpl } from './../Model/admin-impl';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
   headers= new HttpHeaders()
  .set('authorization', localStorage.getItem('token'))


  constructor( private http:HttpClient) { }
  addAdmin(admin:AdminImpl):Observable<AdminImpl>{

    return this.http.post<AdminImpl>(`${environment.API_URL}/admin`,admin);

  }
  login(admin:AdminImpl):Observable<AdminImpl>{
    return this.http.post<AdminImpl>(`${environment.API_URL}/admin/login`,admin);
  }
  logout(){
    localStorage.removeItem('token')
  }

  isLoggedIn():boolean{
    if(localStorage.getItem('token')){
         return true;
    }
    else
    return false;
  }
}
