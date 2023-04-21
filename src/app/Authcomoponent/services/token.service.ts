import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public api_url = environment.api_url;
  private iss = {
    login :this.api_url+"/validateOtp" ,
    signUp :this.api_url+"/signUp" ,
  };
  constructor(
  ) { }

  handle(post:any,profile:any){
    this.set(post,profile);
  }
  set(token:any,profile:any){
    localStorage.setItem('token',token)
    localStorage.setItem('profile',JSON.stringify(profile) )
  }
  get(){
    return localStorage.getItem('token')
  }
  remove(){
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
  }
  isValid(){
    const token = this.get();

    if(token){
      const payload = this.payload(token)
      
      if(payload){
        return (Object.values(this.iss).indexOf(payload.iss) > -1 )? true : false ;
      }
    }
    return false;
  }
  payload(token:any){
    const payload = token.split('.')[1]

    return this.decode(payload);
  }
  decode(payload:any){
  
    return JSON.parse(atob(payload));
  }
  loggedIn(){
    return this.isValid();
  }
}
