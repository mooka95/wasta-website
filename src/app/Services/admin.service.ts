import { AdminImpl } from './../Model/admin-impl';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  getHeaders(){
    let   headers=  new HttpHeaders().set('authorization', localStorage.getItem('token'));
      return headers;
  }


  constructor( private http:HttpClient) { }
  addAdmin(admin:AdminImpl):Observable<AdminImpl>{
    return this.http.post<AdminImpl>(`${environment.API_URL}/admin`,admin,{headers:this.getHeaders()});
  }
  login(admin:AdminImpl):Observable<AdminImpl>{
    return this.http.post<AdminImpl>(`${environment.API_URL}/admin/login`,admin);
  }
  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn():Observable<AdminImpl>{
        
 
    return this.http.get<AdminImpl>(`${environment.API_URL}/admin`,{headers:this.getHeaders()}).pipe(
      catchError(err=>{
        return throwError(err);
      })
    )
 
  
  }
}
