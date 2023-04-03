import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authSrvice:AuthService , private router:Router){}
  canActivate(): boolean{
    if(!this.authSrvice.isAuthorized()){
      this.router.navigate(['']);
      return false
    }
    return this.authSrvice.isAuthorized();
  }

}
