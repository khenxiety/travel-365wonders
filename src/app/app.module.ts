import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { BookingComponent } from './pages/booking/booking.component';
// forms module
import { FormsModule } from '@angular/forms';
import { TiltTopComponent } from './svgs/tilt-top/tilt-top.component';
import { TiltBottomComponent } from './svgs/tilt-bottom/tilt-bottom.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { EmailComponent } from './pages/email/email.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { Header2Component } from './components/header2/header2.component';
import { BackgroundComponent } from './components/background/background.component';
import { ConnectComponent } from './components/connect/connect.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { SearchComponent } from './components/search/search.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { PostsComponent } from './admin/pages/posts/posts.component';
// import { TestSwiperComponent } from './test-swiper/test-swiper.component';
// httpClient modulee
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PassportAppointmentComponent } from './pages/services-page/passport-appointment/passport-appointment.component';
import { AddPostComponent } from './admin/pages/add-post/add-post.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { FacebookModule } from 'ngx-facebook';
import { VisaProcessingComponent } from './pages/services-page/visa-processing/visa-processing.component';
import { PsaComponent } from './pages/services-page/psa/psa.component';
import { BirthComponent } from './pages/services-page/psa/forms/birth/birth.component';
import { MarriageComponent } from './pages/services-page/psa/forms/marriage/marriage.component';
import { DeathComponent } from './pages/services-page/psa/forms/death/death.component';
import { CenomarComponent } from './pages/services-page/psa/forms/cenomar/cenomar.component';
import { provideStorage, getStorage } from '@angular/fire/storage';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Section1Component,
    AccreditationComponent,
    Section2Component,
    Section3Component,
    AboutUsComponent,
    FooterComponent,
    BannerComponent,
    Banner2Component,
    BookingComponent,
    TiltTopComponent,
    TiltBottomComponent,
    TestimonialsComponent,
    EmailComponent,

    Header2Component,
    BackgroundComponent,
    ConnectComponent,
    ServicesPageComponent,
    SearchComponent,
    ToursPageComponent,
    TourDetailsComponent,
    AdminLoginComponent,
    PostsComponent,
    AboutPageComponent,
    PassportAppointmentComponent,
    AddPostComponent,
    VisaProcessingComponent,
    PsaComponent,
    BirthComponent,
    MarriageComponent,
    DeathComponent,
    CenomarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    CommonModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
