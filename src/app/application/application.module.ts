import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ApplicationComponent } from '../application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AuthGuard } from '../Authcomoponent/authguard/auth.guard';
import { AddcarComponent } from './carbooking/addcar/addcar.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ViewcarsComponent } from './carbooking/viewcars/viewcars.component';
import { LoginComponent } from '../Authcomoponent/login/login.component';
import { BookinghistoryComponent } from './carbooking/bookinghistory/bookinghistory.component';
import { ViewcarsUsersComponent } from './carbooking/users/viewcars-users/viewcars-users.component';
import { BookinghistoryUsersComponent } from './carbooking/users/bookinghistory-users/bookinghistory-users.component';
import { SearchbusComponent } from './busbooking/searchbus/searchbus.component';
import { BookingComponent } from './busbooking/booking/booking.component';
import { BikebookingComponent } from './bikebooking/bikebooking.component';
import { TruckbookingComponent } from './truckbooking/truckbooking.component';
import { AddbikeComponent } from './bikebooking/addbike/addbike.component';
import { ViewbikesComponent } from './bikebooking/viewbikes/viewbikes.component';
import { BikebookinghistoryComponent } from './bikebooking/bikebookinghistory/bikebookinghistory.component';
import { ViewbikesUsersComponent } from './bikebooking/users/viewbikes-users/viewbikes-users.component';
import { BikebookinghistoryUsersComponent } from './bikebooking/users/bikebookinghistory-users/bikebookinghistory-users.component';
import { AddtruckComponent } from './truckbooking/addtruck/addtruck.component';
import { ViewtrucksComponent } from './truckbooking/viewtrucks/viewtrucks.component';
import { TruckbookinghistoryComponent } from './truckbooking/truckbookinghistory/truckbookinghistory.component';
import { TruckbookinghistoryUsersComponent } from './truckbooking/users/truckbookinghistory-users/truckbookinghistory-users.component';
import { ViewtrucksUsersComponent } from './truckbooking/users/viewtrucks-users/viewtrucks-users.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ViewlistComponent,
    AddcarComponent,
    CarbookingComponent,
    ViewcarsComponent,
    BookinghistoryComponent,
    ViewcarsUsersComponent,
    BookinghistoryUsersComponent,
    SearchbusComponent,
    BookingComponent,
    BikebookingComponent,
    TruckbookingComponent,
    AddbikeComponent,
    ViewbikesComponent,
    BikebookinghistoryComponent,
    ViewbikesUsersComponent,
    BikebookinghistoryUsersComponent,
    AddtruckComponent,
    ViewtrucksComponent,
    TruckbookinghistoryComponent,
    TruckbookinghistoryUsersComponent,
    ViewtrucksUsersComponent,
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatButtonModule,
    FormsModule,
  ],
  exports: [
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [AuthGuard]
})
export class ApplicationModule { }
