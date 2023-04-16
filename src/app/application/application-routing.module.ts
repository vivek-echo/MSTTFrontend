import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AuthGuard } from '../Authcomoponent/authguard/auth.guard';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { AddcarComponent } from './carbooking/addcar/addcar.component';

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
      path: "busbooking",
      component: BusbookingComponent,
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
      },
      children:[
        {path:'addcar', component: AddcarComponent , data:{
          bookingtype : "Add Car"
        }}
      ]
    },
    {
      path: "truckbooking",
      component: BusbookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Truck Booking"
      }
    },
    {
      path: "bikebooking",
      component: BusbookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Bike Booking"
      }
    },
    {
      path: "airticket",
      component: BusbookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Air Ticket"
      }
    },
    {
      path: "hotelBooking",
      component: BusbookingComponent,
      canActivate:[AuthGuard],
      data:{
        bookingtype : "Hotel Booking"
      }
    },
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
