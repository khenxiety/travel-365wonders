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
      img:'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/272059482_1381958258907921_6410312322260015214_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG2_1U7tjPcw8nKEi_emcX06SPNDZDM8q7pI80NkMzyrr-AhjhziH2JMudm0FuNwiU5GImYMM4qGlBG7qlzATw_&_nc_ohc=jSmOdZfRPRcAX8Yt-Mp&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_4Wj59O0wxqfzEcuWF0FyehhJNmox34Jo0M7gWP2janA&oe=62585687',
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
      img:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/264495997_1356629738107440_2369769159455204623_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGOfCwNWG_uKkxDfWN24RFngeegtd-cwxSB56C135zDFBNVI8TEuVem0A0KjtsCI6geZNhcwYomA8INeWN7sBm4&_nc_ohc=-mh5EvHRFc0AX9OXGoh&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT_TQ6ZXKdRImYoREf4UXkGz4i3KvjmOEAItG52nPYsWUQ&oe=6257DE81',
      route:'/tours'

    },{
      id:4,
      title: 'DOMESTIC TOUR PACKAGE',
      duration: 'Duration varies',
      description:'Domestic Tour Package - Boracay - Palawan - Cebu - Bohol - Davao - Siargao - Iloilo - Ilocos - Baguio',
      img:'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/271135714_1374230966347317_4960211525419041574_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHXmN9JR-rDspR5_bN52gkWPnxbxUY_yGY-fFvFRj_IZuQRipQ7PhT3RSkndoTipAa4sbnrIObeThhL0O8gSky9&_nc_ohc=axZKkwuqb74AX_eTrRe&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8j4LH5lj5tiHFH1Qyve-hZ9Zpm0bI-nTnXGah1YCxT7A&oe=6257283E'
      ,route:'/tours'
      
    
    },
    {
      id:5,
      title: 'PASSPORT (NEW & RENEWAL)',
      duration: 'Duration varies',
      description:'Accepting DFA Appointment YOU MAY FILE US THROUGH ONLINE. 📝Kindly Fill out this Form',
      links:'https://forms.gle/pTrecCWp92p9hhzs6',
      img:'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/244451305_1314149882355426_4300815331476872424_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGiWph6plmqjK6LBrQv6VxJD5dGABrt6DUPl0YAGu3oNc2HkbFq6DuvRvNcYUoC9fE5PQaNHfgsEY6gV2Q6IJz5&_nc_ohc=jH590-LNu7gAX8828yJ&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_UxMijF1yzd8CfslG8q4h5ZNemZiaMJUeByebuEuuxzQ&oe=62575AEF',
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
      img:'https://blog.ipleaders.in/wp-content/uploads/2020/11/hotel-booking-mobile-app-development-1140x648.jpg'


    },
    {
      id:8,
      title: 'TRAVEL INSURANCE',
      duration: 'Duration varies',
      description:'TRAVEL INSURANCE - Domestic - International with COVID-19 Coverage',
      img:'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241418280_1293638351073246_4783615396895885071_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFjEyLwl4A3q3W5A1j2dwjqCaBOB7zQgiwJoE4HvNCCLKT89eT9VC6EcHaXkO5jnqHHUf_jo98WDj8crd2Kl1Sc&_nc_ohc=bxu7uw-2rQEAX8Y9tLx&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT9sKd78OpD48Lf9mnNnnOonK244tfFaP73MdJUCb7WGGw&oe=625790CD'

    },{
      id:9,
      title: 'APOSTILLE',
      duration: 'Duration varies',
      description:'Authenticate the seals and signatures of officials on public documents such as birth certificates, court orders, or any other document issued by a federal agency or certified by an American or foreign consult.',
      img:'https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/139497966_1146561779114238_4004597536206680445_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFHbMcV_gxf6z-O2da3T1dHYLsr6O6Aq1pguyvo7oCrWm_D5n9IsbTLKK1MY2AbCnQ8pYfqz6RfK489jwryHhQD&_nc_ohc=Yn4_kiXd_L4AX_m3n4o&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8LBMUPqd78Y2H0nYQVIY-Oe3VXv4lAUWDEIQ-ruA1IEw&oe=627A5226'
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
