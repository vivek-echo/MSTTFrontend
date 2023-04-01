import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject <boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  isAuthenticate:boolean = false;
  changeAuthStatus(value:boolean){
    this.loggedIn.next(value);
    this.isAuthenticate = value;
  }
  constructor(
    private Token: TokenService
  ) { }

//   isAuthenticate:boolean = false;
//   changeAuthStatus(value:boolean){
// this.isAuthenticate = value;
  // }
}
