import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  date:any;


  child!:number ;
  infants!:number ;
  adult!: number;

  max:number=9

  maxChild:number=this.max;
  maxInfants:number=this.max;




  maxmessage:any;


  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
});
  }

}
