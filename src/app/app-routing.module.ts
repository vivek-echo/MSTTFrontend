import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Authcomoponent/login/login.component';
import { SignupComponent } from './Authcomoponent/signup/signup.component';
import { HomeModule } from './Home/home.module';
import { AuthGuard } from './Authcomoponent/authguard/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateprofileComponent } from './application/updateprofile/updateprofile.component';



const appRoutes : Routes=[
  {

    path: '',
    loadChildren: () =>
    import("./Home/home.module").then(
      (m) => m.HomeModule
    ),
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
    path: 'updateprofile',
    component:UpdateprofileComponent
  },
  {
    path: "Application",
    canActivate:[AuthGuard],
    loadChildren: () =>
      import("./application/application.module").then(
        (m) => m.ApplicationModule
      ),
  },
  // {
  //   path:"**",
  //   component:NotFoundComponent
  // }
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
