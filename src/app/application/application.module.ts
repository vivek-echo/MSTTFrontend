import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ApplicationComponent } from '../application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { AuthGuard } from '../Authcomoponent/authguard/auth.guard';
import { AddcarComponent } from './carbookng/addcar/addcar.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ViewlistComponent,
    BusbookingComponent,
    AddcarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  providers: [AuthGuard]
})
export class ApplicationModule { }
