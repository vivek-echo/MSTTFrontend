import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userProfile :any =[] ;
  storage: any;
  public api_url = environment.api_url;
  stateData:any=[];
  cityParams:any=[];
  constructor(private HttpClient: HttpClient) { }

  getUserProfile(){
    this.storage=localStorage.getItem('profile');
    this.userProfile = JSON.parse( this.storage);
    return this.userProfile
  }

  getState(){
    return this.HttpClient.get(this.api_url + '/getState');
    
  }

  getCity(stateId:any){
    this.cityParams = {
      'stateId':stateId
    }
    return this.HttpClient.post(this.api_url + '/getCity',this.cityParams);
  }

 
}
