import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
declare let $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  memberType: any = "";
  firstName: any = "";
  lastName: any = "";
  email: any = "";
  shopName: any = "";
  dob: any = "";
  mobileNo: any = "";
  address: any = "";
  gender: any = "";
  encryptOtp: any = "";
  userOtp: any = "";
  password: any = "";
  stateData: any = [];
  cityData: any = [];
  validateOtpParam: any = [];
  confirmPassword: any = "";
  signUpParams: any;
  loadding: Boolean = false;
  stateLoading: Boolean = false;
  cityLoading: Boolean = false;
  public api_url = environment.api_url;
  public asset_url = environment.asset_url;
  pinCode: any = "";
  state: any = "";
  city: any = "";
  constructor(
    private HttpClient: HttpClient,
    private AlertHelper: AlertHelper,
    private route: Router,
    private CommonService: CommonService
  ) { }
  ngOnInit(): void {
    this.getState();
  }
  onSubmit() {

    if (this.memberType == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Select Member Type");
      return;
    }
    if (this.firstName == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your firstName");
      return;
    }
    if (this.lastName == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your lastName");
      return;
    }
    if (this.email == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your Email");
      return;
    }
    if (this.shopName == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your shopName");
      return;
    }
    if (this.dob == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your Date of Birth");
      return;
    }
    if (this.pinCode == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your pin code");
      return;
    }
    if (this.state == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your state");
      return;
    }
    if (this.city == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your city");
      return;
    }
    if (this.mobileNo == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your mobile No.");
      return;
    }
    if (this.gender == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Select gender");
      return;
    }
    if (this.password == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter password");
      return;
    }
    if (this.confirmPassword == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter confirm Password");
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.AlertHelper.viewAlert('error', "Required", "Password Not Matching");
      return;
    }
    this.AlertHelper.confirmAlert(
      "Are you sure?", "Are you sure you want to register?"
    ).then((r: any) => {
      if (r) {
        this.loadding = true;
        this.signUpParams = {
          'memeberType': this.memberType,
          'firstName': this.firstName,
          'lastName': this.lastName,
          'email': this.email,
          'shopName': this.shopName,
          'dob': this.dob,
          'mobileNo': this.mobileNo,
          'address': this.address,
          'gender': this.gender,
          'password': this.password,
          'confirmPassword': this.confirmPassword
        }
        this.HttpClient.post(this.api_url + "/sendRegisterOtp", this.signUpParams).subscribe(data => this.handleSuccesResponse(data), error => this.handleError(error));
      }
    })

  }
  handleSuccesResponse(data: any) {
    // this.AlertHelper.viewAlert('success', "SUCCESSFULL", data.msg).then((res: any) => {
    //   this.route.navigateByUrl('/login')
    // })
    this.encryptOtp = data.otpEnc
    $('#otpModal').modal('show');
    this.loadding = false;
  }
  handleError(e: any) {
    console.log("google");
    this.loadding = false;
    this.AlertHelper.viewAlert('error', "ERROR", e.msg)
  }

  //get sate api from common service
  getState() {
    this.stateLoading = true;
    this.CommonService.getState().subscribe((res: any) => {
      this.stateData = res.stateData;
      this.stateLoading = false;
    });

  }
  //get city api from common service
  getCity(stateId: any) {
    this.cityLoading = true;
    this.CommonService.getCity(stateId).subscribe((res: any) => {
      this.cityData = res.cityData;
      console.log(this.cityData);
      this.cityLoading = false;
    });
  }
  validateOtp() {
    this.loadding = true;
    this.validateOtpParam = {
      'otp': this.userOtp,
      'encOtp': this.encryptOtp
    }
    this.HttpClient.post(this.api_url + "/validateRegisterOtp", this.validateOtpParam).subscribe((res: any) => {
      if (res.statusResponse == true) {
        this.HttpClient.post(this.api_url + "/signUp", this.signUpParams).subscribe((rData: any) => {
          if (rData.statusResponse == true) {
            this.loadding = false;
            this.AlertHelper.viewAlert('success', "SUCCESSFULL", rData.msg).then((res: any) => {
              $('#otpModal').modal('hide');
              this.route.navigateByUrl('/login')

            })
          } else {
            this.loadding = false;
            this.AlertHelper.viewAlert('error', "ERROR", res.msg)
          }
        })
      } else {
        this.loadding = false;
        this.AlertHelper.viewAlert('error', "INVALID", res.msg)
      }
    });
  }
}
