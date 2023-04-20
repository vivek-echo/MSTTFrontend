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
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcarComponent } from './application/carbooking/addcar/addcar.component';
import { ViewcarsComponent } from './application/carbooking/viewcars/viewcars.component';
// import { NgxOtpInputModule } from 'ngx-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    LoadScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
    // NgxOtpInputModule
  ],
  providers: [AlertHelper,AuthGuard,LoginComponent,AddcarComponent,ViewcarsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
