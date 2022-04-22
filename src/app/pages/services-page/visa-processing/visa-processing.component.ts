import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visa-processing',
  templateUrl: './visa-processing.component.html',
  styleUrls: ['./visa-processing.component.scss']
})
export class VisaProcessingComponent implements OnInit {


  destination:any;
  return_date:any;
  departure_date:any


  country:any;
  constructor(private http:HttpClient, private title: Title) { }

  ngOnInit(): void {



    this.http.get('https://restcountries.com/v3.1/all').subscribe(data=>{
      
      this.country=data;
      // sort
      this.country.sort((a:any,b:any)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
      })
      
      console.log(this.country);
    })
    window.scroll({ 
      top: 0, 
      left: 0
    });

    this.title.setTitle('365Wonders | Services | Travel Insurance');

  }

}
