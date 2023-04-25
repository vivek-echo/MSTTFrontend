import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  memeberType:any ="";
  firstName:any ="";
  lastName:any="";
  email:any="";
  shopName:any="";
  dob:any="";
  mobileNo:any="";
  address:any="";
  gender:any="";
  password:any="";
  confirmPassword:any="";
  signUpParams:any;
  loadding :Boolean = false;
  public api_url = environment.api_url;
  public asset_url = environment.asset_url;
  constructor(
    private HttpClient : HttpClient,
    private AlertHelper : AlertHelper,
    private route : Router,
  ) { }
  ngOnInit(): void {
    console.log(this.api_url)
  }
  onSubmit(){
   
    if(this.memeberType == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Select Member Type");
      return;
    }
    if(this.firstName == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your firstName");
      return;
    }
    if(this.lastName == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your lastName");
      return;
    }
    if(this.email == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your Email");
      return;
    }
    if(this.shopName == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your shopName");
      return;
    }
    if(this.dob == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your Date of Birth");
      return;
    }
    if(this.mobileNo == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter Your mobile No.");
      return;
    }
    if(this.gender == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Select gender");
      return;
    }
    if(this.password == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter password");
      return;
    }
    if(this.confirmPassword == ""){
      this.AlertHelper.viewAlert('error',"Required","Please Enter confirm Password");
      return;
    }
    if(this.password !== this.confirmPassword){
      this.AlertHelper.viewAlert('error',"Required","Password Not Matching");
      return;
    }
    this.loadding = true;
    this.signUpParams = {
      'memeberType':this.memeberType ,
      'firstName':this.firstName ,
      'lastName':this.lastName ,
      'email':this.email,
      'shopName':this.shopName,
      'dob':this.dob,
      'mobileNo':this.mobileNo,
      'address':this.address,
      'gender':this.gender,
      'password':this.password,
      'confirmPassword':this.confirmPassword
    }
    this.HttpClient.post(  this.api_url + "/signUp", this.signUpParams).subscribe(data=>this.handleSuccesResponse(data),error=>this.handleError(error) )
  }
  handleSuccesResponse(data:any){
    this.AlertHelper.viewAlert('success',"SUCCESSFULL",data.msg).then((res:any)=>{
      this.route.navigateByUrl('/login')
    })
    this.loadding = false;
  }
  handleError(e:any){
    this.loadding = false;
    this.AlertHelper.viewAlert('error',"ERROR",e.msg)
  }
}
