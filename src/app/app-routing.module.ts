import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { BookingComponent } from './pages/booking/booking.component';
import { EmailComponent } from './pages/email/email.component';
import { HomeComponent } from './pages/home/home.component';
import { PassportAppointmentComponent } from './pages/services-page/passport-appointment/passport-appointment.component';
import { PsaComponent } from './pages/services-page/psa/psa.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { VisaProcessingComponent } from './pages/services-page/visa-processing/visa-processing.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';

import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'contact-page',
    component: EmailComponent,
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'services/passport-appointment',
    component: PassportAppointmentComponent,
  },
  {
    path: 'services/travel-insurance',
    component: VisaProcessingComponent,
  },
  {
    path: 'tours',
    component: ToursPageComponent,
  },
  {
    path: 'tours/tour-details/:id',
    component: TourDetailsComponent,
  },
  {
    path: 'about-us',
    component: AboutPageComponent,
  },
  {
    path: 'services/psa-appointment',
    component: PsaComponent,
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/module/admin-module/admin-module.module').then(
        (m) => m.AdminModuleModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
