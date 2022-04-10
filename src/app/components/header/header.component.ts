import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarfixed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>80){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }

  }

  toggle(){
    const nav = document.getElementById('nav-items')!;
    nav.classList.toggle('open');


    const section1 = document.getElementById('blur')!;
    section1.classList.toggle('open');
  }

}
