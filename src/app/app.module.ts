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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
