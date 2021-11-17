import { AdminComponent } from './../components/admin/admin.component';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot,  CanDeactivate,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanExitGuard implements CanDeactivate<AdminComponent>  {
  canDeactivate(component: AdminComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return component.canExit();
  }

  
}
