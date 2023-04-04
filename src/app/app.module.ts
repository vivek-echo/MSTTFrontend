import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { HomeComponent } from './Home/home.component';
import { SignupComponent } from './Authcomoponent/signup/signup.component';
import { LoginComponent } from './Authcomoponent/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationRoutingModule } from './application/application-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './Home/home.module';
import { AlertHelper } from './core/helper/alert-helper';
import { AuthGuard } from './Authcomoponent/authguard/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { OtpcheckComponent } from './Authcomoponent/otpcheck/otpcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    OtpcheckComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    NgxOtpInputModule
  ],
  providers: [AlertHelper,AuthGuard,OtpcheckComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
