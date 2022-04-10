import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { BookingComponent } from './pages/booking/booking.component';
import { EmailComponent } from './pages/email/email.component';
import { HomeComponent } from './pages/home/home.component';
import { PassportAppointmentComponent } from './pages/services-page/passport-appointment/passport-appointment.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';



const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"contact-page",
    component:EmailComponent
  },
  {
    path:"services",
    component:ServicesPageComponent
  },{
   
    path:"services/passport-appointment",
    component:PassportAppointmentComponent

  },
  {
    path:"tours",
    component:ToursPageComponent
  },
  {
    path:"tours/tour-details/:id",
    component:TourDetailsComponent
  },
  {
    path:"about-us",
    component:AboutPageComponent
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/module/admin-module/admin-module.module').then(m => m.AdminModuleModule)
  },




  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
