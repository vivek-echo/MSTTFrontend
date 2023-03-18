import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home.component';

const routes : Routes=[
  
  {
    path: '',
   component: HomeComponent,
   children: [
   
    {
      path: "",
      component: LandingComponent,
    },
    {
      path: "aboutUs",component :AboutUsComponent
    }
  ]
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})  
export class HomeRoutingModule { }
