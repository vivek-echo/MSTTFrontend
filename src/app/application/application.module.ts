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
import { CarbookingComponent } from './carbooking/carbooking.component';
import { AddcarComponent } from './carbooking/addcar/addcar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from 'angular-reactive-form/lib/components/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ViewlistComponent,
    BusbookingComponent,
    CarbookingComponent,
    AddcarComponent
  ],
  imports: [
    CommonModule,RouterModule, NgSelectModule , FormsModule
  ],
  providers: [AuthGuard]
})
export class ApplicationModule { }
