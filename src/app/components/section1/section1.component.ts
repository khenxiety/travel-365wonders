import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  url: string = "https://www.youtube.com/watch?v=IMc1in561jc&ab_channel=365WondersBookingReservationsService";
  urlSafe: any;

  title="Welcome";
  navbarfixed:boolean=false;

  top_value:any=window.innerHeight;

  constructor(public sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>80){
      this.navbarfixed=true;
      this.top_value=0;
      
    }
    else{
      this.navbarfixed=false;
      this.top_value=window.innerHeight;
    }

  }

  toTop(){
    window.scroll({ 
      top: this.top_value, 
      left: 0
  });
  }

 

}
