import { Component ,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any ="";
  password:any="";
  loginParams:any
  public api_url = environment.api_url;
  constructor(
    private HttpClient : HttpClient
  ) { }
  ngOnInit(): void {
    console.log(this.api_url)
  }
  onSubmit(){
    this.loginParams = {
      'email':this.email,'password':this.password
    }
    this.HttpClient.post(  this.api_url + "/login", this.loginParams).subscribe((data: any) => {
      console.log(data);

    })

  }
}
