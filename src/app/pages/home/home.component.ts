import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });

    this.title.setTitle('365Wonders | Home');
  }

}
