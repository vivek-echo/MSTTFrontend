import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userProfile :any =[] ;
  storage: any;
  constructor() { }

  getUserProfile(){
    this.storage=localStorage.getItem('profile');
    this.userProfile = JSON.parse( this.storage);
    return this.userProfile
  }
}
