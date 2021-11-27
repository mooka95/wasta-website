import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminService:AdminService,private router:Router){}
 canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(!localStorage.getItem('token')){
    alert('Pleae login First');
    this.router.navigate(['./admin/login']);
    return false;
  }
return this.adminService.isLoggedIn().pipe(map(res => {
  return !!res;
}),
catchError((err,caught)=>{
  alert('Pleae login First');
  this.router.navigate(['./admin/login']);
    return throwError(err);
})


);
  }

  
}
