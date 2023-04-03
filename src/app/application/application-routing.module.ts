import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes : Routes=[
  {
    path: 'application',
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
    },
    {
      path: "busbooking",
      component: BusbookingComponent,
      data:{
        bookingtype : "Bus Booking"
      }
    },
    {
      path: "taxibooking",
      component: BusbookingComponent,
      data:{
        bookingtype : "Taki Booking"
      }
    },
    {
      path: "truckbooking",
      component: BusbookingComponent,
      data:{
        bookingtype : "Truck Booking"
      }
    },
    {
      path: "bikebooking",
      component: BusbookingComponent,
      data:{
        bookingtype : "Bike Booking"
      }
    },
    {
      path: "airticket",
      component: BusbookingComponent,
      data:{
        bookingtype : "Air Ticket"
      }
    },
    {
      path: "hotelBooking",
      component: BusbookingComponent,
      data:{
        bookingtype : "Hotel Booking"
      }
    },
    {
      path: "viewList",
      component: ViewlistComponent,
    },
  ]
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule { }
