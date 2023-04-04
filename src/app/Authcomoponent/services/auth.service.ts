import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { OtpcheckComponent } from '../otpcheck/otpcheck.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject <boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value:boolean){
    this.loggedIn.next(value);
  }
  constructor(
    private Token: TokenService, private otpcheck: OtpcheckComponent
  ) { }

  isAuthorized(){
    if(this.Token.isValid()){
      return true;
    }
    return false;
  }

  isOtpValid(){
    if(this.otpcheck.isOtpValid){
      return true;
    }
    return false;
  }
}
