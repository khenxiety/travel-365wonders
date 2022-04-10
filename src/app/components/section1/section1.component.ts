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

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>500){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }

  

  }


  toTop(){
    window.scroll({ 
      top: 0, 
      left: 0
  });
  }

 

}
