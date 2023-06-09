import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authSrvice:AuthService , private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): boolean{
    if(this.authSrvice.isAuthorized()){
      return true;
    }
    this.router.navigate(['/login']);
    return false
  }

}
