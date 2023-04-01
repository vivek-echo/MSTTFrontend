import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authSrvice:AuthService){}
  canActivate(): boolean{
    if(this.authSrvice.isAuthenticate){
      return true;
    }
    return false;
  }

}
