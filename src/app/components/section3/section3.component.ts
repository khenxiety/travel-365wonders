import { ChangeDetectorRef, Component, NgZone, ViewChild, OnInit} from '@angular/core';
import Swiper from 'swiper';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {  } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  slides:number=3

  tours=[
    {
      id:1,
      title:'Tagaytay Staycation',
      price: 'P1,999',
      image:'assets/tours/tour1.jpg',
      description:"P1,999 lang per night, Tagaytay Staycation na yan! Oo, di ka namamalikmata, P1,999 nga!",
      location:'Tagaytay City',
      rating:4.5,
      days:"3 days-2 nights",
      people:2,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Tagaytay City',
        'Tagaytay Beach',
        'Tagaytay National Park',
        'Tagaytay Zoo',
        'Tagaytay Museum',
        'Tagaytay City',
      ],
      category:'local'



    },
    {
      id:2,
      title:'2D1N BAGUIO Staycation',
      price: ' P3,799 /person',
      image:'assets/tours/tour2.jpg',
      description:"Abot kayang 2D1N BAGUIO Private Tours for as low as PHP 3,799 /person",
      location:'Baguio City',
      rating:4.5,
      days:"2 days-1 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local'
      


    },
    {
      id:3,
      title:'4D3N BORACAY ALL IN PACKAGE',
      price: 'P8,999 /person',
      image:'assets/tours/tour3.jpg',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local'
      


    },
    {
      id:4,
      title:'Thailand Trip',
      price: 'P8,999 /person',
      image:'assets/tours/tour4.jpg',
      description:"Abot kayang 4D3N Thailand ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Thailand',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Thailand City',
        'Thailand Beach',
        'Thailand National Park',
        'Thailand Zoo',
        'Thailand Museum',
        'Thailand City',
      ],
      category:'international'
      


    },
    {
      id:5,
      title:'Ilocos',
      price: 'P8,999 /person',
      image:'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/276161930_1428594167577663_8841921417650499926_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFYljWw96WQWWcPR5RlulLAOgqwb2RlBDg6CrBvZGUEOJ1JICUiFa1Xex9Za_FgGelGAammE0UXdNACiyFA-L8J&_nc_ohc=hvI6as1TfdYAX-yzSo1&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-zC8WJdyjVZNTLeIg-71mUTtV9lunNjldilI_Q5_5_tw&oe=62497FAD',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local'
      
      


    },
    {
      id:6,
      title:'3-day Puerto Princesa Package',
      price: 'P6,180 /person',
      image:'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/277355936_1425343991236014_9134754103797484454_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeENfvcIKqqjSMQ2f2pD_vk0JxS1dJ5bnssnFLV0nluey0WxEso2ZUF5xCTyETcCIQU6Bwgw8Dzukx7nFhVqn3NB&_nc_ohc=sW8vit2DYQ0AX_-qNYM&_nc_ht=scontent.fcrk1-4.fna&oh=00_AT-vGM7lW2EDuZ5TuIN5SWDIq0gXTJB3U1KrbTR--nwOyw&oe=624E6F3A',
      description:"Explore the lush beauty of Puerto Princesa, the City in a Forest. Our 3-day package will bring you to the sights and sounds of its wonderous nature for as low as PHP 6,180",
      location:'Puerto Princesa Palawan',
      rating:4.5,
      days:"3 days-2 nights",
      people:9,
      departure:'Mar 28, 2022',
      return:'June 30, 2022',
      highlights:[
        'Puerto Princesa',
        'Puerto Princesa Beach',
        'Puerto Princesa National Park',

      ],
      category:'local'

    },
    {
      id:7,
      title:'KUALA LUMPUR Package',
      price: 'PHP 14,200 /person',
      image:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/277354941_1425365297900550_6400606129481221524_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDoogiLKhb-UB7QJV2wG07uT1cCEcY5zm5PVwIRxjnOXWcFp7cJiQ6f8a0ovFF1BryV9K_TXiuo9q9BkCyffNf&_nc_ohc=93O2bdDsGpoAX_5ZLcR&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT9zQ__ertfCr3juiC1MZukdKqAu6biqYgL2UACYp5wntw&oe=624EC725',
      description:'4D3N KUALA LUMPUR W/ GENTING HIGHLAND for as low as PHP 14,200 /person',
      location:'Malaysia',
      rating:4.5,
      days:"4 days-3 nights",
      people:9,
      departure:'Apr 1 , 2022',
      return:'Apr 4, 2022',
      highlights:[
        'Kuala Lumpur',
        'Kuala Lumpur Beach',
        'Kuala Lumpur National Park']
      ,
      category:'international'
    },
    {
      id:8,
      title:'Dubai Package',
      price: 'PHP 27,160 /person',
      image:'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/277580796_1429879324115814_4534942616432561662_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH_F9zeT8q69mym5dnJchpKBTa-2BGXNU0FNr7YEZc1TRaiJvKAkYTuXJKOiXe8meTSAXD3JMp4s8ILOHKzDuoB&_nc_ohc=BvB4wvr7vMgAX9kky5p&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT858qEah1_Sk_zoy5T1M7qcXoTGN2cSXdJPb7TBWJckCA&oe=624E8A35',
      description:'Feel the best tour & travel package to magnificent city of Dubai 6D5N Dubai Land Arrangement Package for as low as PHP 27,160 /person'
      ,
      location:'Dubai',
      rating:4.5,
      days:"6 days-5 nights",
      people:9,
      departure:'Apr 1 , 2022',
      return:'Apr 4, 2022',
      highlights:[
        'Dubai',
      ]
      ,
      category:'international'
    }
  ]
  international:any;
  local:any;

  constructor(private router: Router,private cd: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {

    const slide = document.getElementById('mySwiperID')!;

    // filter tours by category
    this.international=this.tours.filter(tour=>tour.category=='international');
    this.local=this.tours.filter(tour=>tour.category=='local');
   

  }

  test(){
    console.log("test");
  }
  // hostlistener media queries
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   const query = window.matchMedia("(max-width: 991px)")!;
  //   if (query.matches) {
     
  //     this.slides=2
  //   } 
    
  //   else {
     
  //     this.slides=3
      
  //   }
    
  // }


  details(data:any){
    this.router.navigate(['/tours/tour-details',data.id])

    console.log(data);

  }
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  show: boolean = false;
  thumbs: any;
  slides$ = new BehaviorSubject<string[]>(['']);

  

  getSlides() {
    this.slides$.next(Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`));
  }

  thumbsSwiper: any;
  setThumbsSwiper(swiper:any) {
    this.thumbsSwiper = swiper;
  }
  controlledSwiper: any;
  setControlledSwiper(swiper:any) {
    this.controlledSwiper = swiper;
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  slides2 = ['slide 1', 'slide 2', 'slide 3'];
  replaceSlides() {
    this.slides2 = ['foo', 'bar'];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  

  log(log: string) {
    // console.log(string);
  }

  breakPointsToggle!: boolean;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
    };
  }

  slidesEx = ['first', 'second'];

  onSlideChange(swiper: any) {
    if (swiper.isEnd) {
      // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
      this.ngZone.run(() => {
        this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`];
      });
      console.log(this.slidesEx);
    }
  }

}
