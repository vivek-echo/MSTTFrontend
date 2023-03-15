import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ApplicationComponent } from '../application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ApplicationModule { }
