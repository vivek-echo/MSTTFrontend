import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Authcomoponent/login/login.component';
import { SignupComponent } from './Authcomoponent/signup/signup.component';
import { HomeComponent } from './Home/home.component';


const appRoutes : Routes=[
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: "Application",
    loadChildren: () =>
      import("./application/application.module").then(
        (m) => m.ApplicationModule
      ),
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
