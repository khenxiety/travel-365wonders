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
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import {collection,addDoc,Firestore, getDocs} from '@angular/fire/firestore'


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

  tours:any;
  international:any;
  local:any;

  constructor(private router: Router,private cd: ChangeDetectorRef, private ngZone: NgZone,private dummy:DummyServiceService,private firestore:Firestore) { }

  ngOnInit(): void {

    const slide = document.getElementById('mySwiperID')!;
    

   
    


    this.getPosts()
   

  }
  getPosts(){
    const dbinstance=collection(this.firestore,'posts');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
     
      this.tours=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]
     
      this.international=this.tours.filter((tour:any)=>tour.category=='international');
      this.local=this.tours.filter((tour:any)=>tour.category=='local');



     
     
    }).catch((err:any)=>{
      console.log(err.message)
    })

    
  }

  


  details(data:any){
    this.router.navigate(['/tours/tour-details',data.id])


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
