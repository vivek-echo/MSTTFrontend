import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes : Routes=[
  {
    path: '',
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
      path: "viewlist",
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
