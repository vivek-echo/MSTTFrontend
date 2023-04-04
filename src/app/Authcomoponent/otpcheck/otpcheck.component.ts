import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-otpcheck',
  templateUrl: './otpcheck.component.html',
  styleUrls: ['./otpcheck.component.css']
})
export class OtpcheckComponent {
  constructor(private router:Router){}
  otpInputConfig:NgxOtpInputConfig ={
    otpLength:6,
    autofocus:true,
    classList:{
      inputBox:'my-super-box-class',
      input:'my-super-class',
      inputFilled:'my-super-filled-class',
      inputDisabled:'my-super-disabled-class',
      inputSuccess:'my-super-success-class',
      inputError:'my-super-error-class'
    }
  }
  isOtpValid!: boolean;
  value!: number;
  handleOtpChange(value:any){
    // console.log(value.length)
    // if(value===123456){
    //   alert("OTP validated successfully");
    //   this.router.navigateByUrl('/Application/dashboard')
    //   this.isOtpValid = true;
    // }
    // this.isOtpValid = false;
    // alert("OTP Invalid")
  }
  detectOtp(value:any){

  }
  handleFillEvent(value:any){
    console.log(parseInt(value));
    if(value==123456){
      alert("OTP validated successfully");
      this.router.navigateByUrl('/Application/dashboard')
      this.isOtpValid = true;
    }
    else{
      this.isOtpValid = false;
      alert("OTP Invalid")
    }

  }
}
