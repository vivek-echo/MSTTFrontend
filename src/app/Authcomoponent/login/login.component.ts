import { Component, OnInit } from '@angular/core';
declare let $: any;
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {

    // FOR VIEW PASSWORD STARTS
    $(document).on('click', '.password-indicator', () => {
      var PASSWORD_FIELD = $(this).closest('.password-wrapper').find('input');
      $(this).toggleClass('fa-eye-slash');
      var attrType = PASSWORD_FIELD.attr('type');
      if (attrType == 'password') {
        PASSWORD_FIELD.attr('type', 'text');
      } else {
        PASSWORD_FIELD.attr('type', 'password');
      }
    });
    // FOR VIEW PASSWORD STARTS ENDS
    if (this.Auth.isAuthorized()) {
      this.route.navigateByUrl('/Application/dashboard')
    }
  }

  email: any = "";
  password: any = "";
  loginParams: any
  loadding: boolean = false;
  checkUserValid: boolean = false;
  userOtp: any = "";
  encryptOtp: any = "";
  validLogin: any;
  userId: any;
  public api_url = environment.api_url;
  constructor(
    private HttpClient: HttpClient,
    private TokenService: TokenService,
    private route: Router,
    private Auth: AuthService,
    private AlertHelper: AlertHelper,
    public Spinner: NgxSpinnerService
  ) { }

  onSubmit() {
    if (this.email == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your Email");
      return;
    }
    if (this.password == "") {
      this.AlertHelper.viewAlert('error', "Required", "Please Enter Your Password")
      return;
    }
    this.loadding = true;

    this.loginParams = {
      'email': this.email, 'password': this.password
    }

    this.HttpClient.post(this.api_url + "/checkUser", this.loginParams).subscribe(data => this.checkUser(data), error => this.errorHandel(error))
  }

  checkUser(data: any) {
    this.checkUserValid = true;
    // this.userId = data.id;
    this.encryptOtp = data.otp;
    $('#otpModal').modal('show');
    // this.Spinner.hide();
    this.loadding = false;
  }
  validateOtp() {
    // this.Spinner.show();
    this.loadding = true;
    this.validLogin = {
      'email': this.email, 'password': this.password, 'otp': this.encryptOtp, 'userOtp': this.userOtp
    }
    this.HttpClient.post(this.api_url + "/validateOtp", this.validLogin).subscribe(data => this.handleResponse(data), error => this.errorHandel(error))
  }
  handleResponse(e: any) {
    // this.Spinner.show();
    this.loadding = true;
    this.TokenService.handle(e.access_token, e.data);
    this.Auth.changeAuthStatus(true);
    this.route.navigateByUrl('/Application/dashboard')
  }
  errorHandel(e: any) {
    // this.Spinner.hide();
    this.loadding = false;
    this.checkUserValid = false;
    this.AlertHelper.viewAlert('error', "INVALID", e.error.message)
  }
}
