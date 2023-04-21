import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AuthGuard } from '../Authcomoponent/authguard/auth.guard';
import { AddcarComponent } from './carbooking/addcar/addcar.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { ViewcarsComponent } from './carbooking/viewcars/viewcars.component';
import { BookinghistoryComponent } from './carbooking/bookinghistory/bookinghistory.component';
import { ViewcarsUsersComponent } from './carbooking/users/viewcars-users/viewcars-users.component';
import { BookinghistoryUsersComponent } from './carbooking/users/bookinghistory-users/bookinghistory-users.component';
import { SearchbusComponent } from './busbooking/searchbus/searchbus.component';
import { BookingComponent } from './busbooking/booking/booking.component';

const routes : Routes=[
  {
    path: 'Application',
   component: ApplicationComponent,
   children: [
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full",
    },
    {
      path: "dashboard",
      component: DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path: "searchbus",
      component: SearchbusComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Search Bus"
      }
    },
    {
      path: "busbooking/booking",
      component: BookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Bus Booking"
      }
    },
    {
      path: "taxibooking",
      component: CarbookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Taxi Booking"
      }
    },
    {
      path: "addcar",
      component: AddcarComponent,
      canActivate:[AuthGuard]
    },
    {
      path: "viewcars",
      component: ViewcarsComponent,
      canActivate:[AuthGuard]
    },
    {
      path: "bookinghistory",
      component: BookinghistoryComponent,
      canActivate:[AuthGuard]
    },
    {
      path: "users/viewcars-users",
      component: ViewcarsUsersComponent,
      canActivate:[AuthGuard]
    },
    {
      path: "users/bookinghistory-users",
      component: BookinghistoryUsersComponent,
      canActivate:[AuthGuard]
    },



    // {
    //   path: "truckbooking",
    //   component: BusbookingComponent,
    //   canActivate:[AuthGuard],
    //   data:{
    //     bookingtype : "Truck Booking"
    //   }
    // },
    // {
    //   path: "bikebooking",
    //   component: BusbookingComponent,
    //   canActivate:[AuthGuard],
    //   data:{
    //     bookingtype : "Bike Booking"
    //   }
    // },
    // {
    //   path: "airticket",
    //   component: BusbookingComponent,
    //   canActivate:[AuthGuard],
    //   data:{
    //     bookingtype : "Air Ticket"
    //   }
    // },
    // {
    //   path: "hotelBooking",
    //   component: BusbookingComponent,
    //   canActivate:[AuthGuard],
    //   data:{
    //     bookingtype : "Hotel Booking"
    //   }
    // },
    {
      path: "viewList",
      component: ViewlistComponent,
      canActivate:[AuthGuard]
    },
  ]
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule { }
