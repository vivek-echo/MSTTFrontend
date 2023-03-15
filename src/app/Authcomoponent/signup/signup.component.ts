import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:any ="";
  password:any="";
  name:any="";
  signUpParams:any;
  public api_url = environment.api_url;
  constructor(
    private HttpClient : HttpClient
  ) { }
  ngOnInit(): void {
    console.log(this.api_url)
  }
  onSubmit(){
    this.signUpParams = {
      'email':this.email,'password':this.password,'name':this.name
    }
    this.HttpClient.post(  this.api_url + "/signUp", this.signUpParams).subscribe((data: any) => {
      console.log(data);

    })
  }
}
