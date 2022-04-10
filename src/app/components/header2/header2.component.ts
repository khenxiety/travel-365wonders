import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    const nav = document.getElementById('nav-items')!;
    nav.classList.toggle('open');


    const section1 = document.getElementById('blur')!;
    section1.classList.toggle('open');
  }

}
