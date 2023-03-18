import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { HeaderComponent } from './Home/shared/header/header.component';
// import { FooterComponent } from './Home/shared/footer/footer.component';
// import { AboutUsComponent } from './Home/about-us/about-us.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
