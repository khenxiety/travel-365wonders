import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  services:Array<any> = [
    {
      id:1,
      title: 'HOTEL BOOKING',
      duration: 'Duration varies',
      description:'HOTEL BOOKING - Domestic - International',
      img:'https://blog.ipleaders.in/wp-content/uploads/2020/11/hotel-booking-mobile-app-development-1140x648.jpg',
      route:'/booking'

    },
    {
      id:2,
      title: 'FLIGHT BOOKING',
      duration: 'Duration varies',
      description:'Domestic Tour Package - Boracay - Palawan - Cebu - Bohol - Davao - Siargao - Iloilo - Ilocos - Baguio',
      img:'https://www.lemax.net/wp-content/uploads/2018/04/flight-booking-system.jpg',
      route:'/booking'

    },
    {
      id:3,
      title: 'INTERNATIONAL TOUR PACKAGE',
      duration: 'Duration varies',
      description:'International Tour Package - Asia - Middle East - Europe - USA',
      img:'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/278639743_1439475333156213_4805021730816975808_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHHufkf3bCT2neL8XXyoYUh7Wu3FOEXV03ta7cU4RdXTXL2KcqvT9aMlnOPO8Jx-8_rFahUH17NJTwDjpMrF9uh&_nc_ohc=wUU16H3nBA0AX9kMNFn&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT98fJ6BUrj0ZIVeXxOO50enmHBDv-3pnGv4mpCuqvWAMg&oe=6263668E',
      route:'/booking'

    },{
      id:4,
      title: 'DOMESTIC TOUR PACKAGE',
      duration: 'Duration varies',
      description:'Domestic Tour Package - Boracay - Palawan - Cebu - Bohol - Davao - Siargao - Iloilo - Ilocos - Baguio',
      img:'assets/wonders/domestictravel.png'
      ,route:'/booking'
      
    
    },
    {
      id:5,
      title: 'PASSPORT (NEW & RENEWAL)',
      duration: 'Duration varies',
      description:'Accepting DFA Appointment YOU MAY FILE US THROUGH ONLINE. 📝Kindly Fill out this Form',
      links:'https://forms.gle/pTrecCWp92p9hhzs6',
      img:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/270783139_1371732016597212_8657104272500170564_n.png?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFjWvNPFPWw463xA-b9QecPePi6o0pyQ3F4-LqjSnJDcTr_4HtWLnRUiDNgNq8qZoUSHQ2sXagrnhxOXbLSQY75&_nc_ohc=haf5g8m530oAX_DMcUj&tn=g8dx6XxYA_poVqN_&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8Fz_WnuWewF02rwuO-KDaBRZB-eO00r-yAXK8imfcbaA&oe=62648890',
      route:'/services/passport-appointment'

    },
    {
      id:6,
      title: 'Philippine Statistics Authority (PSA)',
      duration: 'Duration varies',
      description:'PSA Filling is NOW available !! Request for your PSA (formerly NSO) birth certificate, marriage certificate,Death certificate and Cenomar.',
      img:'https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/139497966_1146561779114238_4004597536206680445_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFHbMcV_gxf6z-O2da3T1dHYLsr6O6Aq1pguyvo7oCrWm_D5n9IsbTLKK1MY2AbCnQ8pYfqz6RfK489jwryHhQD&_nc_ohc=Yn4_kiXd_L4AX_m3n4o&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8LBMUPqd78Y2H0nYQVIY-Oe3VXv4lAUWDEIQ-ruA1IEw&oe=627A5226'


    },
    {
      id:7,
      title: 'Visa Processing Assistance',
      duration: 'Duration varies',
      description:'Visa Application of the following Countries: - JAPAN - KOREA - USA - CANADA - UK - SCHENGEN VISA -',
      img:'assets/wonders/visa2.png',


    },
    {
      id:8,
      title: 'TRAVEL INSURANCE',
      duration: 'Duration varies',
      description:'TRAVEL INSURANCE - Domestic - International with COVID-19 Coverage',
      img:'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/246874346_1324010881369326_1288362554074457417_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEUlhHFJ2gtwrVKDPc3FaJvhnn-i3XK8j2Gef6LdcryPYmK1tjbXi_u6rq-ZRQpWZArjFKSOlcKksqFCKlgtRk7&_nc_ohc=Izvt9GNoL6AAX-oTS4g&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT-s5izUrfUEtlvxW-XWscIwVf8g-HVMaJGtFQlQ4biN2w&oe=626440FB',
      route:'/services/travel-insurance'


    },{
      id:9,
      title: 'APOSTILLE',
      duration: 'Duration varies',
      description:'Authenticate the seals and signatures of officials on public documents such as birth certificates, court orders, or any other document issued by a federal agency or certified by an American or foreign consult.',
      img:'https://www.usauthentication.com/images/home-img1.png'
    }

  ]

  constructor(private title: Title, private router:Router) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });

    this.title.setTitle('365Wonders | Services');
  }


  navigate(route:any){
    this.router.navigate([route]);

  }

}
