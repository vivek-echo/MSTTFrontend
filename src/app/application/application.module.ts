import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ApplicationComponent } from '../application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ApplicationModule { }
