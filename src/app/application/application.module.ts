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
import { AddcarComponent } from './carbooking/addcar/addcar.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ViewcarsComponent } from './carbooking/viewcars/viewcars.component';
import { LoginComponent } from '../Authcomoponent/login/login.component';import { ViewcarsComponent } from './carbooking/viewcars/viewcars.component';
import { BookinghistoryComponent } from './carbooking/bookinghistory/bookinghistory.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ViewlistComponent,
    BusbookingComponent,
    AddcarComponent,
    CarbookingComponent,
    ViewcarsComponent,
    BookinghistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard]
})
export class ApplicationModule { }
